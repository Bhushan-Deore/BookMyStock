import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SaleActionWindow from "./SaleActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
  openSaleWindow: () => {},
  closeSaleWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSaleWindowOpen, setIsSaleWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  const handleOpenSaleWindow = (uid) => {
    setIsSaleWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSaleWindow = () => {
    setIsSaleWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSaleWindow: handleOpenSaleWindow,
        closeSaleWindow: handleCloseSaleWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSaleWindowOpen && <SaleActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
