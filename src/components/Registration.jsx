import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // for redirect

const NavYuvakForm = () => {
  const navigate = useNavigate(); // hook to redirect
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    age: "",
    dob: "",
    mobile: "",
    email: "",
    address: "",
    membership: "",
    date: "",
    paymentMode: "",
    amount: "",
    paymentScreenshot: null,
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false); // for button success state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    setSubmitted(false);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post("https://mandir-backend.vercel.app/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setSubmitted(true);
      setSuccessMsg("पंजीकरण सफल! / Registration Successful! 🙏");

      // Optional: redirect after short delay
      setTimeout(() => {
        navigate("/thank-you"); // make sure you have this route in your app
      }, 1500);

      // Reset form
      setFormData({
        name: "",
        fatherName: "",
        age: "",
        dob: "",
        mobile: "",
        email: "",
        address: "",
        membership: "",
        date: "",
        paymentMode: "",
        amount: "",
        paymentScreenshot: null,
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      setErrorMsg(
        "सर्वर में त्रुटि। / Server error. कृपया बाद में प्रयास करें।"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-200 flex flex-col items-center p-6">
      {/* Header Section */}
      <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 mb-6 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-3">
          राधा-कृष्ण मंदिर, लाड़ियाका (पलवल, हरियाणा)
        </h1>
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">
          🌸 नव युवक समिति – सदस्य पंजीकरण 🌸
        </h2>
        <p className="text-gray-700 mb-2">
          यह फ़ॉर्म नव युवक समिति सदस्य पंजीकरण के लिए है। यह समिति किसी
          भी पुरानी बनी हुई समिति या पंचायत से संबंध नहीं रखती। यह समिति केवल
          मंदिर के विकास और जन-सेवा के उद्देश्य से बनाई जा रही है।
        </p>
        <p className="text-gray-700 mb-2">
          This form is for registering as a member of the Nav Yuvak Committee.
          The committee has no connection with any old committee or local council.
          It is formed solely for temple development and public service.
        </p>
        <p className="text-gray-800 font-semibold mt-3">
          जो भी व्यक्ति इसमें हिस्सा लेना चाहता है, वह अपना पंजीकरण कराए। <br />
          Anyone who wants to participate may register here.
        </p>

        <div className="mt-4 text-left bg-yellow-50 p-4 rounded border-l-4 border-red-500">
          <p className="font-semibold mb-2">
            समिति में पंजीकरण के प्रकार / Membership Types:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              PRO Member – नौकरी/रोज़गार से जुड़े हैं – ₹200+ (200 ₹ आधार है,
              अधिक देने की सुविधा)
            </li>
            <li>Core Member – घर से समर्थ हैं – ₹100 (100 ₹ आधार)</li>
            <li>Member – केवल सेवा देंगे – कोई राशि नहीं / Only Service</li>
          </ul>
          <p className="text-red-600 font-semibold mt-2">
            ⚠️ महत्वपूर्ण सूचना / Important Notice:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>समिति में किसी भी प्रकार की राजनीतिक चर्चा/गतिविधि नहीं की जाएगी।</li>
            <li>यह समिति केवल मंदिर के विकास और जनसेवा के लिए समर्पित है।</li>
            <li>यदि आप ऊपर बताए गए बिंदुओं से सहमत हैं तो ही पंजीकरण करें।</li>
            <li>
              Online Registration:{" "}
              <span className="font-bold text-orange-700">
                www.radharanitemple.in
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8">
        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
              ✍️ Registration Form – Step 1
            </h2>
            <form onSubmit={handleProceed} className="space-y-4">
              <div>
                <label className="block font-semibold">नाम / Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">
                  पिता का नाम / Father’s Name:
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-semibold">आयु / Age:</label>
                  <input
                    type="number"
                    name="age"
                    min="16"
                    max="42"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-semibold">जन्म तिथि / DOB:</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold">मोबाइल नंबर / Mobile:</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">ईमेल / Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">पता / Address:</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">
                  सदस्यता प्रकार / Membership:
                </label>
                <select
                  name="membership"
                  value={formData.membership}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Select --</option>
                  <option value="PRO Member – ₹200+">PRO Member – ₹200+</option>
                  <option value="Core Member – ₹100">Core Member – ₹100</option>
                  <option value="Member – केवल सेवा">Member – केवल सेवा</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">पंजीकरण तिथि / Date:</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600"
              >
                Proceed to Payment →
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
              💳 Payment – Step 2
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold">
                  भुगतान का तरीका / Payment Mode:
                </label>
                <select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Select --</option>
                  <option value="online">Online Payment</option>
                  <option value="offline">Offline Payment (Mandir)</option>
                </select>
              </div>

              {formData.paymentMode === "online" && (
                <div className="bg-yellow-50 p-4 rounded">
                  <p className="mb-2">
                    📌 Scan this QR or use UPI ID: <b>9050570307@ybl</b>
                  </p>
                  <img
                    src="/mandir-payment.jpeg"
                    alt="Mandir Payment QR"
                    className="w-48 mx-auto mb-4"
                  />
                  <div>
                    <label className="block font-semibold">
                      राशि दर्ज करें / Enter Amount:
                    </label>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold">
                      भुगतान का स्क्रीनशॉट अपलोड करें:
                    </label>
                    <input
                      type="file"
                      name="paymentScreenshot"
                      accept="image/*"
                      onChange={handleChange}
                      required
                      className="w-full border px-3 py-2 rounded"
                    />
                  </div>
                </div>
              )}

              {formData.paymentMode === "offline" && (
                <div className="bg-gray-100 p-4 rounded">
                  <p>
                    कृपया मंदिर से हार्ड कॉपी फॉर्म लें और वहीं भुगतान करें। <br />
                    Please collect the hard copy form from Mandir and pay there.
                  </p>
                </div>
              )}

              {successMsg && (
                <p className="text-green-600 font-semibold text-center">
                  {successMsg}
                </p>
              )}
              {errorMsg && (
                <p className="text-red-600 font-semibold text-center">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading || submitted}
                className={`w-full py-3 rounded-lg font-bold ${
                  submitted
                    ? "bg-green-500 text-white cursor-default"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {loading ? "Submitting..." : submitted ? "Submitted ✅" : "Register Now 🙏"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NavYuvakForm;
