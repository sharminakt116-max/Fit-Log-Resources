'use client';

import { ICard } from '@/types/type';
import { toast } from 'react-toastify';

interface WorkoutActionsProps {
  workout: ICard;
}

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  // Add to Today's Plan
  const handleAddToPlan = () => {
    const existingPlan: ICard[] = JSON.parse(
      localStorage.getItem('todayPlan') || '[]'
    );

    const alreadyAdded = existingPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      toast.info("Already added to today's plan");
      return;
    }

    const updatedPlan = [...existingPlan, workout];

    localStorage.setItem(
      'todayPlan',
      JSON.stringify(updatedPlan)
    );

    // Navbar count update
    window.dispatchEvent(new Event('storageUpdate'));

    toast.success("Added to today's plan");
  };

  // Save for Later
  const handleSave = () => {
    const existingSaved: ICard[] = JSON.parse(
      localStorage.getItem('savedWorkouts') || '[]'
    );

    const alreadySaved = existingSaved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info('Already saved');
      return;
    }

    const updatedSaved = [...existingSaved, workout];

    localStorage.setItem(
      'savedWorkouts',
      JSON.stringify(updatedSaved)
    );

    // Navbar count update
    window.dispatchEvent(new Event('storageUpdate'));

    toast.success('Saved for later');
  };

  return (
    <div className="flex gap-4 mt-8">
      {/* Add to Today's Plan */}
      <button
        onClick={handleAddToPlan}
        className="flex-1 bg-lime-400 text-black font-bold py-3 rounded-lg hover:bg-lime-300"
      >
        Add to today's plan
      </button>

      {/* Save for Later */}
      <button
        onClick={handleSave}
        className="flex-1 border border-zinc-700 py-3 rounded-lg hover:border-lime-400"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;