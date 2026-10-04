"use client";

import { usePlan } from "@/context/PlanContext";
import Toast from "./Toast";

export default function ToastContainer() {
  const { toast, setToast } = usePlan();

  if (!toast) {
    return null;
  }

  return (
    <Toast
      message={toast}
      onClose={() => setToast("")}
    />
  );
}