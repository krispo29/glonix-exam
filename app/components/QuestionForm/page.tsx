import React from "react";

const QuestionForm = () => {
  return (
    <div className="p-6 border border-blue-400 rounded-lg">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">ตั้งกระทู้คำถาม</h2>

      {/* Form */}
      <form>
        {/* Title Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="title">
            หัวข้อกระทู้
          </label>
          <input
            id="title"
            type="text"
            placeholder="หัวข้อกระทู้"
            className="input input-bordered w-full"
          />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="content">
            เนื้อหา
          </label>
          <textarea
            id="content"
            placeholder="พิมพ์ข้อความที่นี่..."
            rows={6}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn bg-yellow-500 text-white hover:bg-yellow-600"
          >
            ส่ง
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
