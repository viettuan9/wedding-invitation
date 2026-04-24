import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useState } from "react";

// Định nghĩa kiểu dữ liệu cho form
interface FormData {
  name: string;
  quantity: number;
  attendance: "accept" | "decline";
}

// Schema validation với yup
const schema = yup.object({
  name: yup.string().required("Vui lòng nhập họ tên"),
  quantity: yup
    .number()
    .typeError("Số lượng phải là số")
    .min(1, "Số lượng tối thiểu là 1")
    .required("Vui lòng nhập số lượng khách"),
  attendance: yup
    .string()
    .oneOf(["accept", "decline"], "Vui lòng chọn một trong hai lựa chọn")
    .required("Vui lòng chọn tham dự hoặc không"),
});

interface Props {
  open: boolean;
  onClose: () => void;
}

export const RsvpModal = ({ open, onClose }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      quantity: 1,
      attendance: "accept", // Không chọn trước
    },
  });

  if (!open) return null;

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(import.meta.env.VITE_SCRIPT_EXCEL, {
        method: "POST",
        mode: "no-cors", // Quan trọng: Google Apps Script không hỗ trợ CORS, cần no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok && res.type !== "opaque") {
        toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
        return;
      } else {
        toast.success("Gửi thông tin thành công!");
        reset();
        onClose();
      }
    } catch (error) {
      toast.error("Có lỗi xảy ra, vui lòng thử lại sau.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    onClose();
    reset(); // Reset khi đóng bằng overlay hoặc nút X
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-100 p-8">
        <h2 className="text-2xl font-serif text-center mb-6">
          Vui lòng hồi đáp
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Để phục vụ bạn và gia đình chu đáo hơn xin bớt chút thời gian điền
          giúp mình thông tin bên dưới
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Họ tên */}
          <div>
            <label className="block text-sm mb-1">Họ tên</label>
            <input
              type="text"
              {...register("name")}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Số lượng khách */}
          <div>
            <label className="block text-sm mb-1">
              Số lượng đi cùng (bao gồm bạn)
            </label>
            <input
              type="number"
              min={1}
              {...register("quantity", { valueAsNumber: true })}
              className={`w-full border rounded-lg px-3 py-2 ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          {/* Lựa chọn tham dự */}
          <div>
            <label className="block text-sm mb-2">Lựa chọn</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="accept"
                  {...register("attendance")}
                  className="w-4 h-4"
                />
                <span>Rất vui được tham dự</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="decline"
                  {...register("attendance")}
                  className="w-4 h-4"
                />
                <span>Rất tiếc không thể tham dự</span>
              </label>
            </div>
            {errors.attendance && (
              <p className="text-red-500 text-sm mt-1">
                {errors.attendance.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-100 text-dark py-2 rounded-lg hover:bg-blue-200 transition"
          >
            {isSubmitting ? "Đang gửi..." : "Xác nhận"}
          </button>
        </form>

        {/* Nút đóng */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>
      </div>

      {isSubmitting && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
          <div className="bg-white rounded-xl px-6 py-5 shadow-xl flex items-center gap-3">
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 border-t-gray-700 animate-spin" />
            <p className="text-sm text-gray-700">Đang gửi phản hồi...</p>
          </div>
        </div>
      )}
    </div>
  );
};
