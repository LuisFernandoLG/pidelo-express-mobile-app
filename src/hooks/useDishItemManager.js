import { useEffect, useState } from "react";
import { useWebSocketsIO } from "./useWebSocketsIO";

export const useDishItemManager = ({ initialStatus }) => {
  const [currenStatus, setCurrentStatus] = useState(initialStatus);
  const { setDishReadyOnBD, setDishDeliveredOnDB } = useWebSocketsIO();
  // const {} = useWebSocketsIO()

  useEffect(() => {
    if (currenStatus.name !== initialStatus.name) {
      // fROM DB
      setCurrentStatus(initialStatus);
    }
  }, [initialStatus]);

  const hanldeChangeValue = ({
    newStatus,
    orderKey,
    courseMealKey,
    clientKey,
    dishKey,
  }) => {
    // Update it visually and DB
    setCurrentStatus(newStatus);
    console.log({ orderKey, courseMealKey, clientKey, dishKey });

    const dbProps = {
      orderId: orderKey,
      courseMealId: courseMealKey,
      clientId: clientKey,
      dishId: dishKey,
    };

    if (newStatus.name === "Por entregar") setDishReadyOnBD(dbProps);
    else if (newStatus.name === "Entregada") {
      setDishDeliveredOnDB(dbProps);
    }
  };

  return { hanldeChangeValue, currenStatus };
};
