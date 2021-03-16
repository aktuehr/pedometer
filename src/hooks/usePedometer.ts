import { Pedometer } from '@ionic-native/pedometer';
import { useEffect, useState } from 'react';

const getStepsOfToday = async () => {
  const options = {
    "startDate": new Date(new Date().setHours(0, 0, 0, 0)),
    "endDate": new Date(new Date().setHours(23, 59, 59, 999))
  };
  return await Pedometer.queryData(options);
}

export const usePedometer = () => {
  const [numberOfSteps, setNumberOfSteps] = useState(0);
  useEffect(() => {
    const updateStepsOfToday = async () => {
      const stepsOfToday = await (await getStepsOfToday()).numberOfSteps;
      setNumberOfSteps(stepsOfToday);
    }

    if (numberOfSteps === 0) {
      updateStepsOfToday();
    }
    Pedometer.startPedometerUpdates().subscribe(updateStepsOfToday)
    
  }, [numberOfSteps]);
  return { numberOfSteps };
}