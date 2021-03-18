import { Health, HealthDataType, HealthQueryOptionsAggregated } from '@ionic-native/health/ngx';
import { useEffect, useState } from 'react';

const health = new Health();

const getStepsOfToday = async () => {
  const options: HealthQueryOptionsAggregated = {
    startDate: new Date(new Date().setHours(0, 0, 0, 0)),
    endDate: new Date(new Date().setHours(23, 59, 59, 999)),
    dataType: 'steps',
    bucket: 'day',
  }

  return await health.queryAggregated(options);
  // return await Pedometer.queryData(options);
}

const successCallback = () => {
  alert('success');
}

const errorCallback = (error: any) => {
  alert(error);
}

export const usePedometer = () => {
  const [numberOfSteps, setNumberOfSteps] = useState(0);
  useEffect(() => {
    const requestAuthorization = async () => {
      alert('requestAuthorization')
      const usingHealthData: HealthDataType[] = 
      [
        {
          read: ['steps']
        },
      ];
      
      await health.requestAuthorization(usingHealthData).then(successCallback).catch(errorCallback);
    }
    requestAuthorization();

    const updateStepsOfToday = async () => {
      const stepsOfToday = await getStepsOfToday();
      console.log(stepsOfToday[0].value);
      setNumberOfSteps(Number(stepsOfToday[0].value));
    }

    if (numberOfSteps === 0) {
      updateStepsOfToday();
    }
    // Pedometer.startPedometerUpdates().subscribe(updateStepsOfToday)
    
  }, [numberOfSteps]);
  return { numberOfSteps };
}