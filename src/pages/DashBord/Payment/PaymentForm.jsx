import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const { parcelId } = useParams();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: async () => {
      const res = await axiosSecure(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  // console.log("parcelInfo", parcelInfo);
  const amount = parcelInfo?.cost || 0;
  const amountInCents = amount * 100;
  // console.log("amountInCents", amountInCents);

  if (isPending) {
    return <div className=" text-4xl text-center">"loading............."</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    //! step 1 : validate the card--------------------------------->
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("paymentMethod", paymentMethod);

      //! step 2 : confirm the payment ------------------------------->
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCents,
        parcelId,
      });

      const clientSecret = res.data.clientSecret;
      //! step 3 : confirm the payment---------------------------------->
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if (result.error) {
        setError(result.error.message);
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment successful", result);
          const transactionId = result.paymentIntent.id;

          const paymentData = {
            parcelId,
            email: user?.email,
            amount,
            transactionId: transactionId,
            paymentMethod: result.paymentIntent.payment_method_types,
          };
          const paymentRes = await axiosSecure.post("/payments", paymentData);

          if (paymentRes.data.insertedId) {
            {
              console.log("paymentRes", paymentRes);
              // ✅ Show SweetAlert with transaction ID
              await Swal.fire({
                icon: "success",
                title: "Payment Successful!",
                html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                confirmButtonText: "Go to My Parcels",
              });

              // ✅ Redirect to /myParcels
              navigate("/dashboard/myParcel");
            }
          }
        }
      }
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button type="submit" className="btn btn-primary w-full">
          pay {parcelInfo?.cost} BDT
        </button>
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
