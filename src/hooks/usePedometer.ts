import { IPedometerData, Pedometer } from '@ionic-native/pedometer';
import { useEffect } from 'react';

export const usePedometer = () => {
  useEffect(() => {
    const onSuccessUpdate = (pedometerData: IPedometerData) => {
      console.log('onSuccessUpdate');
      console.log(pedometerData);
      // pedometerData.startDate; -> ms since 1970
      // pedometerData.endDate; -> ms since 1970
      // pedometerData.numberOfSteps;
      // pedometerData.distance;
      // pedometerData.floorsAscended;
      // pedometerData.floorsDescended;
    }
    Pedometer.startPedometerUpdates().subscribe(onSuccessUpdate)
  });
}