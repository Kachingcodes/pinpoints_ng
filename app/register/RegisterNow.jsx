import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { getNames } from "country-list";


const RegisterNow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    contactMode: "",
    canReadWrite: "",
    hasEducation: "",
    qualification: "",
    fieldOfStudy: "",
    institution: "",
    graduationYear: "",
    motivation: "",
    goals: "",
    applicationArea: "",
    trainingFormat: "",
    preferredSchedule: "",
    availability: "",
    certification: "",
  });

  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;

  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [loading,  setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({ email: "", dob: "" });


  const countries = getNames(); 

  const canSubmit = consent1 && consent2;    

 const handleChange = (e) => {
  const { name, value } = e.target;

  // Update form data
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Real-time validation for email
  if (name === "email") {
    if (value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  }

  // Real-time validation for date of birth (must be 18+)
  if (name === "dob") {
    if (value && !validateDOB(value)) {
      setErrors((prev) => ({
        ...prev,
        dob: "You must be at least 18 years old.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, dob: "" }));
    }
  }
};

// Navigation handlers 
const nextStep = () => {
  if (step < totalSteps) setStep(step + 1);
};

const prevStep = () => {
  if (step > 1) setStep(step - 1);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    try {
      const res = await fetch("/api/registerMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Congratulations, you have been registered successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          canReadWrite: "",
          hasEducationalBackground: "",
          highestQualification: "",
          fieldOfStudy: "",
          institution: "",
          graduationYear: "",
          experienceLevel: "",
          preferredSchedule: "",
          motivation: "",
          goals: "",
        });
      } else {
        setStatus("Submission Failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Could not send message. Please check your connection");
    }

      setLoading(false);
  };

    // validation helpers
    const validateEmail = (email) => {
    if (!email) return true; // ✅ allow empty emails
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
    };

    const validateDOB = (dob) => {
    if (!dob) return false;
    const birthDate = new Date(dob);
    if (isNaN(birthDate.getTime())) return false; // invalid or empty date
    const now = new Date();
    const age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const isUnderage =
        monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate());
    return age > 18 || (age === 18 && !isUnderage);
    };

  // ✅ Validation Logic for Each Step
  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
            formData.fullName &&
            validateDOB(formData.dob) &&
            !errors.dob &&
            formData.gender &&
            (!formData.email || validateEmail(formData.email)) &&
            !errors.email &&
            formData.phone &&
            formData.country &&
            formData.contactMode
        );
      case 2:
        if (formData.canReadWrite === "No" || formData.canReadWrite === "")
          return false;
        if (formData.canReadWrite === "Yes") {
          if (formData.hasEducation === "") return false;
          if (formData.hasEducation === "Yes") {
            return (
              formData.qualification &&
              formData.fieldOfStudy &&
              formData.institution &&
              formData.graduationYear
            );
          }
          return true;
        }
        return false;
      case 3:
        return true;
      case 4:
        return (
          formData.motivation && formData.goal && formData.applicationArea
        );
      case 5:
        return (
          formData.trainingFormat &&
          formData.preferredSchedule &&
          formData.availability &&
          formData.certification
        );
      case 6:
        return consent1 && consent2;
      default:
        return false;
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-no-repeat bg-cover flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: "url('/peers.png')" }}>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl md:p-2 p-8 mt-8 mb-12">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div
            className="h-3 rounded-full bg-red-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
            ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
            <>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                Step 1: Personal Information
                </h2>
                <div className="grid grid-cols-1 gap-4">
                <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="border p-2 rounded-lg w-full"
                    onChange={handleChange}
                />

                <input
                    name="dob"
                    type="date"
                    required
                    className={`border p-2 rounded-lg w-full ${
                    errors.dob ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                    onChange={handleChange}
                    />
                    {errors.dob && (
                    <p className="text-red-600 text-sm mt-1">{errors.dob}</p>
                    )}

                <select
                    name="gender"
                    required
                    className="border p-2 rounded-lg w-full"
                    onChange={handleChange}
                >
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                </select>

                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className={`border p-2 rounded-lg w-full ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                    }`}
                    onChange={handleChange}
                    />
                    {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                    )}

                <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="border p-2 rounded-lg w-full"
                    onChange={handleChange}
                />

                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="border rounded-lg p-2 w-full"
                    >
                        <option value="">Select your country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                {country}
                                </option>
                            ))}
                </select>

                <select
                    name="contactMode"
                    required
                    className="border p-2 rounded-lg w-full"
                    onChange={handleChange}
                >
                    <option value="">Preferred Mode of Contact</option>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                </select>
                </div>
            </>
            )}

            {/* Step 2: Educational Background */}
            {step === 2 && (
            <>
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                Step 2: Educational Background
                </h2>

                <label className="block mb-2 font-semibold text-gray-700">
                Can you read and write?*
                </label>
                <div className="flex gap-4 mb-4">
                <label>
                    <input
                    type="radio"
                    name="canReadWrite"
                    value="Yes"
                    onChange={handleChange}
                    />{" "}
                    Yes
                </label>
                <label>
                    <input
                    type="radio"
                    name="canReadWrite"
                    value="No"
                    onChange={handleChange}
                    />{" "}
                    No
                </label>
                </div>

                {formData.canReadWrite === "No" && (
                <p className="text-red-600 font-medium">
                    This program requires basic literacy skills.
                </p>
                )}

                {formData.canReadWrite === "Yes" && (
                <>
                    <label className="block mb-2 font-semibold text-gray-700">
                    Do you have a formal educational background?*
                    </label>
                    <div className="flex gap-4 mb-4">
                    <label>
                        <input
                        type="radio"
                        name="hasEducation"
                        value="Yes"
                        onChange={handleChange}
                        />{" "}
                        Yes
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="hasEducation"
                        value="No"
                        onChange={handleChange}
                        />{" "}
                        No
                    </label>
                    </div>

                    {formData.hasEducation === "Yes" && (
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <select
                        name="qualification"
                        required
                        className="border p-2 rounded-lg w-full"
                        onChange={handleChange}
                        >
                        <option value="">Highest Qualification</option>
                        <option>Primary</option>
                        <option>Secondary</option>
                        <option>Diploma</option>
                        <option>BSc</option>
                        <option>MSc</option>
                        <option>MBA</option>
                        <option>PhD</option>
                        <option>Other</option>
                        </select>
                        <input
                        name="fieldOfStudy"
                        type="text"
                        placeholder="Field of Study / Major"
                        className="border p-2 rounded-lg w-full"
                        onChange={handleChange}
                        />
                        <input
                        name="institution"
                        type="text"
                        placeholder="Institution Attended"
                        className="border p-2 rounded-lg w-full"
                        onChange={handleChange}
                        />
                        <input
                        name="graduationYear"
                        type="number"
                        placeholder="Year of Graduation"
                        className="border p-2 rounded-lg w-full"
                        onChange={handleChange}
                        />
                    </div>
                    )}
                </>
                )}
            </>
            )}

            {/* Step 3: Professional Background */} 
            {step === 3 && ( 
                <> 
                <h2 className="text-xl font-bold mb-4 text-gray-800"> Step 3: Professional Background </h2> 
                <input name="occupation" 
                type="text" 
                placeholder="Current Occupation / Role" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} /> 
                
                <input name="organization" 
                type="text" 
                placeholder="Organization / Company Name" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} /> 

                <select name="experienceYears" className="border p-2 rounded-lg w-full" onChange={handleChange} > 
                    <option value="">Years of Work Experience</option> 
                    <option>0–1</option> 
                    <option>2–4</option> 
                    <option>5–7</option> 
                    <option>8–10</option> 
                    <option>10+</option> 
                </select> 
                
                <label className="font-semibold text-gray-700"> Relevant Experience in Finance, Law, or Consulting? </label> 
                
                <div className="flex gap-4 mb-4"> 
                    <label> <input type="radio" name="relevantExperience" value="Yes" onChange={handleChange} />{" "} Yes </label> 
                    <label> <input type="radio" name="relevantExperience" value="No" onChange={handleChange} />{" "} No </label> 
                    </div> {formData.relevantExperience === "Yes" && ( 
                        <textarea name="experienceDetails" 
                        placeholder="Briefly describe your relevant experience" 
                        className="border p-2 rounded-lg w-full" rows="3" 
                        onChange={handleChange} ></textarea> )} 
                        </> )}

            {/* Step 4: Motivation & Goals */} 
            {step === 4 && ( 
                <> 
                <h2 className="text-xl font-bold mb-4 text-gray-800"> Step 4: Motivation & Goals </h2> 
                <textarea name="motivation" 
                placeholder="Why do you want to become a Debt Management Consultant/Expert?" 
                className="border p-2 rounded-lg w-full" 
                rows="3" 
                onChange={handleChange} ></textarea> 
                
                <label className="block font-semibold text-gray-700 mb-2"> What do you hope to achieve from this program? </label> 
                
                <select name="goal" 
                    className="border p-2 rounded-lg w-full" 
                    onChange={handleChange} > 
                        <option value="">Select one</option> 
                        <option>Career Change</option> 
                        <option>Professional Upskilling</option> 
                        <option>Business Expansion</option> 
                        <option>Certification Requirement</option> 
                        <option>Personal Interest</option> 
                </select> 
                
                <select name="applicationArea" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} > 
                    <option value="">Where do you intend to apply your knowledge?</option> 
                    <option>Government</option> 
                    <option>Private Sector</option> 
                    <option>Financial Institution</option> 
                    <option>Self-employed</option> 
                    <option>NGO</option> 
                    <option>Other</option> 
                </select> 
                </> )} 
                
            {/* Step 5: Training Preferences */} 
            {step === 5 && ( 
                <> 
                <h2 className="text-xl font-bold mb-4 text-gray-800"> Step 5: Training Preferences </h2> 
                <select name="trainingFormat" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} > 
                    <option value="">Preferred Training Format</option> 
                    <option>Online (Live Classes)</option> 
                    <option>Physical Classroom</option> 
                    <option>Hybrid</option> 
                </select> 
                
                <select name="preferredSchedule" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} > 
                    <option value="">Preferred Schedule</option> 
                    <option>Morning</option> 
                    <option>Afternoon</option> 
                    <option>Flexible</option> 
                </select> 
                
                <select name="availability" 
                className="border p-2 rounded-lg w-full" 
                onChange={handleChange} > 
                
                    <option value="">Availability (When can you start?)</option> 
                    <option>Immediately</option> 
                    <option>Within 2 weeks</option> 
                    <option>Within 1 month</option> 
                    <option>Later this year</option> 
                </select> 
                
                <div className="flex items-center gap-4 mt-4"> 
                    <label className="font-semibold text-gray-700"> Interested in Certification after completion? </label> 
                    <label> <input type="radio" name="certification" value="Yes" onChange={handleChange} />{" "} Yes </label> 
                    <label> <input type="radio" name="certification" value="No" onChange={handleChange} />{" "} No </label> 
                </div> 
                </> )}

            
            
            {/* Step 6: Reference & Consent */} 
            {step === 6 && ( 
                <> 
                    <h2 className="text-xl font-bold mb-4 text-gray-800"> Step 6: Reference & Consent </h2> 
                    <select name="referralSource" className="border p-2 rounded-lg w-full" onChange={handleChange} > 
                        <option value="">How did you hear about this program?</option> 
                        <option>Referral</option> 
                        <option>Social Media</option> 
                        <option>Website</option> 
                        <option>Email</option> 
                        <option>Event</option> 
                        <option>Other</option> 
                    </select> 
                    
                    <input name="referralName" 
                    type="text" 
                    placeholder="If referral, specify name or organization" 
                    className="border p-2 rounded-lg w-full" 
                    onChange={handleChange} /> 
                    
                    <div className="mt-4 space-y-2"> 
                        <label className="flex items-center gap-2"> 
                            <input type="checkbox" 
                            required checked={consent1} 
                            onChange={(e) => setConsent1(e.target.checked)} 
                            /> I confirm that the information provided is true and accurate. </label> 
                            
                        <label className="flex items-center gap-2"> 
                            <input type="checkbox" 
                            required checked={consent2} 
                            onChange={(e) => setConsent2(e.target.checked)} 
                            /> I consent to the use of my data for program administration and communication. </label>
                    </div> 
                </> )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
            {step > 1 && (
                <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                Back
                </button>
            )}

            {step < totalSteps && (
                <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`ml-auto px-5 py-2 text-white rounded-lg ${
                    isStepValid()
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                >
                Next
                </button>
            )}

            {step === totalSteps && (
                <div className="flex flex-col items-center w-full">
                <button
                    type="submit"
                    disabled={!canSubmit || loading}
                    className={`px-5 py-2 text-white font-semibold rounded-lg ${
                    canSubmit
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                >
                    {loading ? (
                    <div className="flex items-center justify-center">
                        <Loader2 className="animate-spin mr-2" size={16} /> Submitting...
                    </div>
                    ) : (
                    "Submit Application"
                    )}
                </button>

                {status && (
                    <p
                    className={`text-center text-sm mt-3 ${
                        status.startsWith("✅") ? "text-green-600" : "text-red-600"
                    }`}
                    >
                    {status}
                    </p>
                )}
                </div>
            )}
            </div>
        </form>
        </div>
    </section>
  );
};

export default RegisterNow;
