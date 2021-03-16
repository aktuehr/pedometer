import { usePedometer } from "../hooks/usePedometer";

export const DisplayPedometer: React.FC = () => {
  const { numberOfSteps } = usePedometer();

  return (
    <div>
      <p>numberOfSteps: {numberOfSteps}</p>
      <p>v0.0.1</p>
    </div>
  );
};
