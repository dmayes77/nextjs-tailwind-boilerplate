"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import CustomButton from "../../../../components/global/CustomButton";
import ThankYouPopup from "../../../../components/thank-you/ThankYouPopup";

const stepSchemas = [
  // Step 1: Contact Information & Services
  Yup.object({
    contact: Yup.string().required("Contact Name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    additionalInterest: Yup.array().min(1, "Select at least one interest option"),
  }),
  // Step 2: Vehicle Information & Enhancements (all optional)
  Yup.object({}),
  // Step 3: Additional Information, Payment Option & Consent
  Yup.object({
    consent: Yup.boolean().oneOf([true], "Consent is required"),
    paymentOption: Yup.string().required("Please select a payment option"),
  }),
];

const timelineOptions = [
  "As Soon As Possible - I am ready to protect my vehicle",
  "Within the next 14 days - I need time to plan",
  "Flexible - I am not in a hurry; my schedule is flexible",
];

export default function EstimateForm({ id, service, interestOptions, enhancementOptions }) {
  const [step, setStep] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [thankYouParams, setThankYouParams] = useState({});

  const initialValues = {
    contact: "",
    phone: "",
    email: "",
    interest: service,
    additionalInterest: [],
    consent: false,
    auto_year: "",
    auto_make: "",
    auto_model: "",
    enhancements: [],
    notes: "",
    additionalInfo: "",
    timelinePreference: "",
    requestType: "Appointment Request",
    paymentOption: "", // New field for Payment Option
  };

  // Custom validation for the current step
  const validateCurrentStep = (values) => {
    try {
      stepSchemas[step].validateSync(values, { abortEarly: false });
      return {};
    } catch (error) {
      const errors = {};
      error.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      return errors;
    }
  };

  const onSubmit = (values) => {
    let combinedNotes = values.notes || "";
    combinedNotes += `\nSource: ${service} Estimate Form`;

    if (values.requestType && values.requestType.length > 0) {
      combinedNotes += `\nRequest Type: ${values.requestType}`;
    }
    if (values.consent) {
      combinedNotes += `\nConsent: ${new Date().toLocaleString()}`;
    }
    if (values.timelinePreference) {
      combinedNotes += `\nTimeline Preference: ${values.timelinePreference}`;
    }
    if (values.additionalInterest && values.additionalInterest.length > 0) {
      combinedNotes += `\nInterest: ${values.additionalInterest.join(", ")}`;
    }
    if (values.enhancements && values.enhancements.length > 0) {
      combinedNotes += `\nEnhancements: ${values.enhancements.join(", ")}`;
    }
    if (values.additionalInfo) {
      combinedNotes += `\nAdditional Info: ${values.additionalInfo}`;
    }
    if (values.paymentOption) {
      if (values.paymentOption === "Deposit") {
        combinedNotes += `\nPayment Option: 30% Deposit Required`;
      } else if (values.paymentOption === "Full") {
        combinedNotes += `\nPayment Option: Pay in Full with 15% Off`;
      }
    }

    const params = new URLSearchParams();
    params.set("key", process.env.NEXT_PUBLIC_ORBISX_API_KEY);
    params.set("dothis", "saveLead");
    params.set("source", `${service} Estimate Form`);
    params.set("leadTag", `${service} Estimate`);
    params.set("interest", values.interest);

    params.append("contact", values.contact);
    params.append("phone", values.phone);
    params.append("email", values.email);
    if (values.auto_year) params.append("auto_year", values.auto_year);
    if (values.auto_make) params.append("auto_make", values.auto_make);
    if (values.auto_model) params.append("auto_model", values.auto_model);
    if (values.enhancements && values.enhancements.length > 0) {
      values.enhancements.forEach((enh) => {
        params.append("enhancements", enh);
      });
    }
    if (values.timelinePreference) {
      params.append("timelinePreference", values.timelinePreference);
    }
    if (values.additionalInterest) {
      params.append("additionalInterest", values.additionalInterest);
    }
    params.append("notes", combinedNotes);

    const crmUrl = `https://orbisx.ca/app/api/VSVnF?${params.toString()}`;

    fetch(crmUrl, { mode: "no-cors" }).finally(() => {
      setThankYouParams(Object.fromEntries(params.entries()));
      setShowThankYou(true);
    });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <section id={id}>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white border border-gray-200 shadow-xl rounded-lg max-w-xl w-full p-6 md:p-12">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8 uppercase">{service} Request</h1>
          <Formik initialValues={initialValues} validate={validateCurrentStep} onSubmit={onSubmit}>
            {({ validateForm }) => (
              <Form>
                {/* Step 1: Request Type & Contact Information */}
                {step === 0 && (
                  <div className="space-y-6">
                    <div className="mb-4">
                      <p className="text-xl font-medium text-gray-700 mb-2">Request Type:</p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex items-center">
                          <Field type="radio" name="requestType" value="Appointment Request" className="mr-2" />
                          <span>Appointment Request</span>
                        </label>
                        <label className="flex items-center">
                          <Field type="radio" name="requestType" value="Estimate Request" className="mr-2" />
                          <span>Estimate Request</span>
                        </label>
                      </div>
                    </div>

                    <hr />
                    <h2 className="text-xl font-medium text-gray-700 mb-4">Contact Information &amp; Services</h2>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                        Contact Name
                      </label>
                      <Field
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="John Doe"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage name="contact" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                      </label>
                      <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="123-456-7890"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@mail.com"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        I am interested in: <span className="text-red-500">*</span>
                      </p>
                      <div className="space-y-2">
                        {interestOptions.map((option, i) => (
                          <div key={i} className="flex items-center">
                            <Field name="additionalInterest">
                              {({ field, form }) => {
                                const isChecked = field.value.includes(option);
                                return (
                                  <input
                                    type="checkbox"
                                    value={option}
                                    checked={isChecked}
                                    onChange={(e) => {
                                      let newValue;
                                      if (e.target.checked) {
                                        newValue = [...field.value, option];
                                      } else {
                                        newValue = field.value.filter((v) => v !== option);
                                      }
                                      form.setFieldValue("additionalInterest", newValue);
                                    }}
                                    className="mr-3"
                                  />
                                );
                              }}
                            </Field>
                            <span className="text-gray-700">{option}</span>
                          </div>
                        ))}
                        <p className="text-xs italic">**You may select more than one</p>
                      </div>
                      <ErrorMessage name="additionalInterest" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                )}
                {/* Step 2: Vehicle Information & Enhancements */}
                {step === 1 && (
                  <div>
                    <h2 className="text-xl font-medium text-gray-700 mb-4">Vehicle Information &amp; Enhancements</h2>
                    <div>
                      <label htmlFor="auto_year" className="block text-sm font-medium text-gray-700">
                        Year
                      </label>
                      <Field
                        type="text"
                        id="auto_year"
                        name="auto_year"
                        placeholder="2025"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="auto_make" className="block text-sm font-medium text-gray-700">
                        Make
                      </label>
                      <Field
                        type="text"
                        id="auto_make"
                        name="auto_make"
                        placeholder="Toyota"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mt-4">
                      <label htmlFor="auto_model" className="block text-sm font-medium text-gray-700">
                        Model
                      </label>
                      <Field
                        type="text"
                        id="auto_model"
                        name="auto_model"
                        placeholder="Camry"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700">
                        {service} Estimate Enhancements (Optional)
                        <p className="text-xs italic">**Select any that apply</p>
                      </label>
                      <div className="mt-1 space-y-2">
                        {enhancementOptions.map((option) => (
                          <div key={option} className="flex items-center">
                            <Field type="checkbox" name="enhancements" value={option} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor={option} className="ml-2 text-sm text-gray-700">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {/* Step 3: Additional Information, Payment Option & Consent */}
                {step === 2 && (
                  <div className="space-y-6">
                    {/* Payment Option Section */}
                    <div className="border border-blue-200 p-4 rounded-lg bg-blue-50">
                      <p className="text-lg font-medium text-blue-800 mb-2">Payment Options</p>
                      <p className="text-sm text-blue-700 mb-3">
                        A 30% deposit is required for your estimate. Alternatively, pay in full now and receive a 15% discount on your total. Please choose one
                        option below.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <label className="flex items-center">
                          <Field type="radio" name="paymentOption" value="Deposit" className="mr-2" />
                          <span className="text-sm text-blue-800">30% Deposit</span>
                        </label>
                        <label className="flex items-center">
                          <Field type="radio" name="paymentOption" value="Full" className="mr-2" />
                          <span className="text-sm text-blue-800">Pay in Full (15% off)</span>
                        </label>
                      </div>
                      <ErrorMessage name="paymentOption" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    {/* Additional Information */}
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                        Share your vehicle's current condition with us—let us know about any cosmetic concerns or areas that need extra attention so we can
                        tailor our service to meet your needs.
                      </label>
                      <Field
                        as="textarea"
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Any additional details about your estimate needs..."
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    {/* Timeline Preference */}
                    <div className="mt-6">
                      <label htmlFor="timelinePreference" className="block text-sm font-medium text-gray-700">
                        Timeline Preference
                      </label>
                      <Field
                        as="select"
                        name="timelinePreference"
                        id="timelinePreference"
                        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-xs focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select a preference</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                    {/* Consent */}
                    <div className="mt-4 flex items-start">
                      <Field type="checkbox" name="consent" className="mt-1 mr-3" />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        By submitting this form, I consent to receive SMS messages and/or emails from this company. To unsubscribe, follow the instructions
                        provided in our communications. Msg &amp; data rates may apply for SMS. Your information is secure and will not be sold to third
                        parties.
                      </label>
                      <ErrorMessage name="consent" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                )}
                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 0 && (
                    <CustomButton type="button" onClick={prevStep} variant="grey">
                      Back
                    </CustomButton>
                  )}
                  {step < 2 && (
                    <CustomButton
                      onClick={() => {
                        validateForm().then((errs) => {
                          if (Object.keys(errs).length === 0) {
                            nextStep();
                          }
                        });
                      }}
                      variant="primary"
                      className="ml-auto"
                    >
                      Next
                    </CustomButton>
                  )}
                  {step === 2 && (
                    <CustomButton type="submit" variant="primary">
                      Submit
                    </CustomButton>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {showThankYou && <ThankYouPopup searchParams={thankYouParams} onClose={() => setShowThankYou(false)} />}
    </section>
  );
}
