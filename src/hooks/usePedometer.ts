import { IPedometerData, Pedometer } from '@ionic-native/pedometer';
import { useEffect, useState } from 'react';

export const usePedometer = () => {
  const [numberOfSteps, setNumberOfSteps] = useState(0);
  useEffect(() => {
    const onSuccessUpdate = (pedometerData: IPedometerData) => {
      console.log('onSuccessUpdate');
      console.log(pedometerData);
      setNumberOfSteps(pedometerData.numberOfSteps);
      // pedometerData.startDate; -> ms since 1970
      // pedometerData.endDate; -> ms since 1970
      // pedometerData.numberOfSteps;
      // pedometerData.distance;
      // pedometerData.floorsAscended;
      // pedometerData.floorsDescended;
    }
    Pedometer.startPedometerUpdates().subscribe(onSuccessUpdate)
  });
  return { numberOfSteps };
}