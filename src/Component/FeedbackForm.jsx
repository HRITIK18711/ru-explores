import React, { useState } from "react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    recommend: "yes",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    { id: "general", label: "General", icon: "✨", color: "indigo" },
    { id: "bug", label: "Bug Report", icon: "🐛", color: "rose" },
    { id: "feature", label: "Feature Idea", icon: "💡", color: "amber" },
    { id: "support", label: "Support", icon: "💬", color: "emerald" },
  ];

  const ratingLabels = [
    "Terrible 😞",
    "Bad 🙁",
    "Okay 😐",
    "Good 🙂",
    "Awesome! 🤩",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating!");
      return;
    }

    setIsSubmitting(true);

    // Replace with your copied Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxp5xi3mh_7YFr284HWf7KXmr_YR6LLRQjlLMMvAALN8tqvU_Zul1ULyu8mfjR_ntht2A/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          rating,
          category,
          message: formData.message,
          name: formData.name,
          email: formData.email,
          recommend: formData.recommend,
        }),
      });

      const result = await response.json();

      if (result.result === "success") {
        setIsSubmitted(true);
      } else {
        alert("Failed to save feedback. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setRating(0);
    setHoverRating(0);
    setCategory("general");
    setFormData({ name: "", email: "", message: "", recommend: "yes" });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg shadow-emerald-500/10">
            ✓
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Thank You!
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Your feedback has been saved to our database!
          </p>
          <button
            onClick={resetForm}
            className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98]"
          >
            Send Another Response
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="relative w-full max-w-xl mt-15">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

        <div className="relative bg-slate-800/90 border border-slate-700/50 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase">
              User Experience
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              We’d love your feedback
            </h1>
            <p className="text-slate-400 text-sm">
              How was your experience? Takes less than 2 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-700/40 rounded-2xl p-5 text-center space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Overall Satisfaction <span className="text-indigo-400">*</span>
              </label>

              <div className="flex justify-center items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => {
                  const active = star <= (hoverRating || rating);
                  return (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform duration-200 transform hover:scale-125 active:scale-95"
                    >
                      <svg
                        className={`w-9 h-9 transition-colors duration-200 ${
                          active
                            ? "text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] fill-current"
                            : "text-slate-700 fill-current hover:text-slate-600"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </button>
                  );
                })}
              </div>

              <div className="h-5">
                {(hoverRating || rating) > 0 && (
                  <span className="text-xs font-semibold text-amber-400 animate-in fade-in duration-150">
                    {ratingLabels[(hoverRating || rating) - 1]}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                What is this regarding?
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {categories.map((cat) => {
                  const isSelected = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setCategory(cat.id)}
                      className={`flex items-center space-x-3 p-3.5 text-xs md:text-sm font-semibold rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? "border-indigo-500 bg-indigo-500/15 text-white ring-1 ring-indigo-500/50 shadow-lg shadow-indigo-500/10"
                          : "border-slate-700/60 bg-slate-900/40 text-slate-400 hover:border-slate-600 hover:bg-slate-900/80 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-400"
                >
                  Your Thoughts <span className="text-indigo-400">*</span>
                </label>
                <span className="text-[10px] text-slate-500">
                  {formData.message.length}/500
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                required
                maxLength={500}
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us what you liked or where we can improve..."
                className="w-full px-4 py-3 text-sm text-slate-100 bg-slate-900/60 border border-slate-700/60 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-400"
                >
                  Name <span className="text-[10px] text-slate-600 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Alex Morgan"
                  className="w-full px-4 py-2.5 text-sm text-slate-100 bg-slate-900/60 border border-slate-700/60 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-400"
                >
                  Email <span className="text-[10px] text-slate-600 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 text-sm text-slate-100 bg-slate-900/60 border border-slate-700/60 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2 pt-1">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                Would you recommend us to others?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "yes", label: "Definitely", icon: "👍" },
                  { value: "maybe", label: "Maybe", icon: "🤔" },
                  { value: "no", label: "No", icon: "👎" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-center space-x-2 p-2.5 text-xs font-medium rounded-xl border cursor-pointer transition-all ${
                      formData.recommend === option.value
                        ? "border-indigo-500 bg-indigo-500/20 text-white"
                        : "border-slate-700/60 bg-slate-900/40 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    <input
                      type="radio"
                      name="recommend"
                      value={option.value}
                      checked={formData.recommend === option.value}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <span>{option.icon}</span>
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm rounded-2xl transition duration-200 shadow-lg shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 active:scale-[0.99] flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Saving Response...</span>
                </>
              ) : (
                <span>Submit Feedback</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}