import { useEffect, useState } from "react";
import { X, ChevronDown } from "lucide-react";

interface PartnershipPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function PartnershipPopup({
  isOpen,
  onClose,
}: PartnershipPopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    partnership: "",
    companyName: "",
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    terms: false,
  });

  // Open popup
  useEffect(() => {
    if (isOpen !== undefined) {
      setShowPopup(isOpen);
    } else {
      setShowPopup(true);
    }
  }, [isOpen]);

  // Prevent background page from scrolling while popup is open
  useEffect(() => {
    if (!showPopup) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    onClose?.();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.partnership) {
      alert("Please select the partnership you wish to apply for.");
      return;
    }

    if (!formData.companyName) {
      alert("Please enter your company name.");
      return;
    }

    if (!formData.name) {
      alert("Please enter your name.");
      return;
    }

    if (!formData.email) {
      alert("Please enter your email address.");
      return;
    }

    if (!formData.phone) {
      alert("Please enter your phone number.");
      return;
    }

    if (!formData.terms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    console.log("Partnership form submitted:", formData);

    alert(
      "Thank you! Your details have been submitted. Our team will be in touch within 48 hours."
    );

    handleClose();
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/40
        p-3
        sm:p-6
        backdrop-blur-[2px]
      "
      onClick={handleClose}
    >
      {/* Popup */}
      <div
        className="
          relative
          flex
          w-full
          max-w-[620px]
          max-h-[calc(100dvh-1.5rem)]
          sm:max-h-[calc(100dvh-3rem)]
          flex-col
          overflow-hidden
          rounded-[18px]
          bg-[#f1f1f1]
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup"
          className="
            absolute
            right-3
            top-3
            sm:right-5
            sm:top-5
            z-50
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-gray-700
            shadow-sm
            transition
            hover:bg-white
            hover:text-black
          "
        >
          <X size={21} strokeWidth={2} />
        </button>

        {/* Scrollable Content */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-5
            pb-6
            pt-6
            sm:px-11
            sm:pb-8
            sm:pt-7
          "
        >
          {/* Heading */}
          <div className="mb-6 pr-10 sm:mb-7">
            <h2
              className="
                text-[25px]
                font-semibold
                leading-tight
                tracking-[-0.5px]
                text-black
                sm:text-[30px]
              "
            >
              Ready to Get Started?
            </h2>

            <p
              className="
                mt-2
                text-[18px]
                leading-[1.5]
                text-black
                sm:text-[21px]
                sm:leading-[1.8]
              "
            >
              Fill in your details and our team will be in touch
              within 48 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Partnership Select */}
            <div className="relative mb-4 sm:mb-[18px]">
              <select
                name="partnership"
                value={formData.partnership}
                onChange={handleChange}
                className="
                  h-[52px]
                  w-full
                  appearance-none
                  rounded-[6px]
                  border
                  border-[#08a995]
                  bg-white
                  px-3
                  pr-10
                  text-[16px]
                  text-[#6f6f6f]
                  outline-none
                  transition
                  focus:border-[#08a995]
                  focus:ring-1
                  focus:ring-[#08a995]
                "
              >
                <option value="" disabled>
                  Select the partnership you wish to apply for
                </option>

                <option value="technology-partner">
                  Technology Partner
                </option>

                <option value="channel-partner">
                  Channel Partner
                </option>

                <option value="reseller-partner">
                  Reseller Partner
                </option>

                <option value="agency-partner">
                  Agency Partner
                </option>

                <option value="strategic-partner">
                  Strategic Partner
                </option>
              </select>

              <ChevronDown
                size={20}
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              />
            </div>

            {/* Company Name + Name */}
            <div
              className="
                mb-4
                grid
                grid-cols-1
                gap-3
                sm:mb-[18px]
                sm:grid-cols-2
              "
            >
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />
            </div>

            {/* Email */}
            <div className="mb-3 sm:hidden">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />
            </div>

            {/* Desktop Email + Country Code + Phone */}
            <div
              className="
                mb-4
                hidden
                sm:grid
                sm:grid-cols-[1fr_78px_1.18fr]
                sm:gap-3
                sm:mb-[19px]
              "
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />

              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="
                    h-[47px]
                    w-full
                    appearance-none
                    rounded-[6px]
                    border
                    border-transparent
                    bg-white
                    px-3
                    text-[16px]
                    text-gray-700
                    outline-none
                    focus:border-[#08a995]
                  "
                  aria-label="Country code"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+65">+65</option>
                  <option value="+971">+971</option>
                  <option value="+49">+49</option>
                </select>

                <ChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />
            </div>

            {/* Mobile Country Code + Phone */}
            <div
              className="
                mb-4
                grid
                grid-cols-[78px_1fr]
                gap-3
                sm:hidden
              "
            >
              <div className="relative">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="
                    h-[47px]
                    w-full
                    appearance-none
                    rounded-[6px]
                    border
                    border-transparent
                    bg-white
                    px-3
                    text-[16px]
                    text-gray-700
                    outline-none
                    focus:border-[#08a995]
                  "
                  aria-label="Country code"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+65">+65</option>
                  <option value="+971">+971</option>
                  <option value="+49">+49</option>
                </select>

                <ChevronDown
                  size={17}
                  className="
                    pointer-events-none
                    absolute
                    right-2
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                  "
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="
                  h-[47px]
                  w-full
                  rounded-[6px]
                  border
                  border-transparent
                  bg-white
                  px-3
                  text-[17px]
                  text-black
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#08a995]
                "
              />
            </div>

            {/* reCAPTCHA Visual Box */}
            <div
              className="
                mb-5
                flex
                h-[95px]
                w-full
                max-w-[378px]
                items-center
                justify-between
                rounded-[2px]
                border
                border-[#d1d1d1]
                bg-white
                px-4
                shadow-sm
                sm:mb-7
              "
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div
                  className="
                    h-[33px]
                    w-[33px]
                    shrink-0
                    border-2
                    border-[#555]
                    bg-white
                  "
                />

                <span className="text-[16px] text-[#222]">
                  I'm not a robot
                </span>
              </div>

              <div className="flex shrink-0 flex-col items-center">
                <div
                  className="
                    text-[38px]
                    font-bold
                    leading-none
                    text-blue-500
                  "
                >
                  ↻
                </div>

                <span className="mt-1 text-[11px] text-[#666]">
                  reCAPTCHA
                </span>
              </div>
            </div>

            {/* Terms */}
            <label
              className="
                mb-5
                flex
                cursor-pointer
                items-start
                gap-3
                sm:items-center
                sm:gap-4
              "
            >
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="
                  mt-1
                  h-[17px]
                  w-[17px]
                  shrink-0
                  cursor-pointer
                  accent-[#08a995]
                  sm:mt-0
                "
              />

              <span className="text-[16px] leading-[1.5] text-black sm:text-[18px]">
                I agree to the Terms & Conditions
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="
                h-[58px]
                w-full
                rounded-[5px]
                bg-[#08a995]
                text-[20px]
                font-semibold
                text-white
                transition
                duration-200
                hover:bg-[#079986]
                active:scale-[0.99]
                sm:h-[66px]
                sm:text-[23px]
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}