import { Link } from "react-router-dom";
import { Checkmark } from "react-checkmark";

const CheckoutSuccess = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6 md:mx-auto">
        <Checkmark size="xxLarge" />
        <div className="text-center">
          <h3 className="md:text-4xl mt-4 text-base text-gray-900 font-semibold text-center">
            Payment Complete!
          </h3>
          <p className="text-gray-600 md:text-xl my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day!</p>
          <div className="py-10 text-center">
            <Link
              to="/home"
              className="px-12 text-gray-400 underline underline-offset-1 text-lg font-semibold py-3"
            >
              Go back to the Home page.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
