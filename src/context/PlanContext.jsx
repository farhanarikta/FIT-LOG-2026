"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export function PlanProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toast, setToast] = useState("");

  // Load saved data when the app starts
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  // Save plan whenever it changes
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts whenever they change
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const showToast = (message) => {
    setToast(message);
  };

  const addToPlan = (workout) => {
    const alreadyExists = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      showToast("Already in today's plan");
      return;
    }

    setPlan([
      ...plan,
      {
        ...workout,
        completed: false,
      },
    ]);

    showToast("Added to today's plan");
  };

  const saveWorkout = (workout) => {
    const alreadyExists = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadyExists) {
      showToast("Already saved");
      return;
    }

    setSaved([...saved, workout]);

    showToast("Saved for later");
  };

  const removeFromPlan = (id) => {
    setPlan(plan.filter((item) => item.id !== id));
    showToast("Removed from today's plan");
  };

  const removeFromSaved = (id) => {
    setSaved(saved.filter((item) => item.id !== id));
    showToast("Removed from saved");
  };

  const toggleDone = (id) => {
    setPlan(
      plan.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      )
    );

    showToast("Workout status updated");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        toast,
        setToast,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  return useContext(PlanContext);
}