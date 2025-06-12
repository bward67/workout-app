'use client'

import React, { useEffect, useState } from "react";

import supabase from "../utils/supabaseClient";





 function WorkoutLog() {
  const [workouts, setWorkouts] = useState<Workout[]>([])

  useEffect(() => {
    async function fetchWorkouts() {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching workouts:', error)
      } else {
        setWorkouts(data)
      }
    }

    fetchWorkouts()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Workout Log</h1>
      <ul className="space-y-2">
        {workouts.map((workout) => (
          <li key={workout.id} className="border rounded-lg p-3 shadow-sm">
            <p className="text-lg font-medium">
              {`${workout.exercise}: ${workout.weight}kg, ${workout.sets} sets of ${workout.reps}, ${new Date(workout.created_at).toLocaleDateString()}`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkoutLog;
