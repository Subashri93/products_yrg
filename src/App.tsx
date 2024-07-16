import React, { useState } from "react";
import CardHeader from "./components/CardHeader";
import Form from "./components/Form";

interface Product {
  title: string;
  imageSrc: string;
  count: number;
  showInfo: boolean;
  infoContent: {
    title: string;
    description: string;
  }[];
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      title: "Fans",
      imageSrc: "src/assets/fanbrown.png",
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Speed Control",
          description: "Adjustable speed settings for customized airflow.",
        },
        {
          title: "Scheduling: Control",
          description: "Programmable operation for automatic on/off times.",
        },
        {
          title: "Smartphone Control",
          description: " Control fans remotely via mobile apps.",
        },
      ],
    },
    {
      title: "AC",
      imageSrc: "src/assets/ac3.png",
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Temperature Control",
          description: " Precise temperature settings for optimal comfort..",
        },
        {
          title: "Scheduling",
          description: "Programmable operation for automatic on/off times.",
        },
      ],
    },
    {
      title: "Lights",
      imageSrc: "src/assets/lights.png",
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Speed Control",
          description: "Adjustable speed settings for customized airflow.",
        },
        {
          title: "Scheduling Control",
          description: "Programmable operation for automatic on/off times.",
        },
      ],
    },

    {
      title: "Touch Panels",
      imageSrc: "src/assets/touchpanel.png",
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Speed Control",
          description: "Adjustable speed settings for customized airflow.",
        },
        {
          title: "Scheduling Control",
          description: "Programmable operation for automatic on/off times.",
        },
      ],
    },

    {
      title: "Geyser",
      imageSrc: "src/assets/geyser.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Temperature Control",
          description: "Adjust water temperature to desired levels.",
        },
        {
          title: "Scheduling",
          description: "Programmable operation for automatic on/off times.",
        },
        {
          title: "Smartphone Control",
          description: "Control geyser remotely via mobile apps.",
        },
      ],
    },
    {
      title: "Motorised Curtain",
      imageSrc: "src/assets/curtain.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Automated Operation",
          description: "Open and close curtains automatically.",
        },
        {
          title: "Scheduling",
          description: "Set schedules for curtain operation.",
        },
        {
          title: "Smartphone Control",
          description: "Control curtains remotely via mobile apps.",
        },
      ],
    },
    {
      title: "Smart Locks",
      imageSrc: "src/assets/smartlocks.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Remote Access",
          description: "Lock and unlock doors remotely.",
        },
        {
          title: "Scheduling",
          description: "Set schedules for locking and unlocking.",
        },
        {
          title: "Access Logs",
          description: "Monitor access logs and history.",
        },
      ],
    },
    {
      title: "Video Doorbell",
      imageSrc: "src/assets/videodoorbell.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Two-Way Communication",
          description: "Talk to visitors remotely.",
        },
        {
          title: "Motion Detection",
          description: "Receive alerts when motion is detected.",
        },
        {
          title: "Video Recording",
          description: "Record and review video footage.",
        },
      ],
    },
    {
      title: "Intrusion Alarms",
      imageSrc: "src/assets/intrusionalarms.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Real-Time Alerts",
          description: "Receive instant alerts for intrusions.",
        },
        {
          title: "Motion Detection",
          description: "Detects motion and triggers alarm.",
        },
        {
          title: "Smartphone Control",
          description: "Manage alarms remotely via mobile apps.",
        },
      ],
    },
    {
      title: "Gas Leakage Detector",
      imageSrc: "src/assets/gasleakagedetector.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Leak Detection",
          description: "Detects gas leaks promptly.",
        },
        {
          title: "Real-Time Alerts",
          description: "Receive instant alerts for gas leaks.",
        },
        {
          title: "Automatic Shutoff",
          description: "Automatically shuts off gas supply.",
        },
      ],
    },
    {
      title: "Smoke/Fire Detector",
      imageSrc: "src/assets/smokefiredetector.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Smoke Detection",
          description: "Detects smoke and potential fires.",
        },
        {
          title: "Real-Time Alerts",
          description: "Receive instant alerts for smoke/fire.",
        },
        {
          title: "Alarm System",
          description: "Triggers alarm to alert occupants.",
        },
      ],
    },
    {
      title: "Water Level Controller",
      imageSrc: "src/assets/waterlevelcontroller.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "Water Level Monitoring",
          description: "Monitor water levels in tanks.",
        },
        {
          title: "Automatic Pump Control",
          description: "Automatically turns pump on/off.",
        },
        {
          title: "Smartphone Alerts",
          description: "Receive alerts for water levels.",
        },
      ],
    },
    {
      title: "CCTV",
      imageSrc: "src/assets/cctv.png", // Update image src manually
      count: 0,
      showInfo: false,
      infoContent: [
        {
          title: "24/7 Surveillance",
          description: "Continuous monitoring and recording.",
        },
        {
          title: "Remote Viewing",
          description: "View footage remotely via mobile apps.",
        },
        {
          title: "Motion Detection",
          description: "Receive alerts for detected motion.",
        },
      ],
    },
  ]);

  console.log(products);

  let total = products.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.count;
  }, 0);

  const increment = (index: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const decrement = (index: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const toggleInfo = (index: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product, i) =>
        i === index ? { ...product, showInfo: !product.showInfo } : product
      )
    );
  };

  return (
    <div className="container mt-5">
      <header>
        <h1 className="text-center mb-4 ">Products</h1>
      </header>

      <div className="row">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <div className={product.showInfo ? "col-6" : "col-12"}>
              <CardHeader
                title={product.title}
                imageSrc={product.imageSrc}
                count={product.count}
                increment={() => increment(index)}
                decrement={() => decrement(index)}
                onInfoClick={() => toggleInfo(index)}
                infoContent={product.infoContent}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <p className="text-end fixed-bottom pe-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="brown"
          className="bi bi-cart"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>{" "}
        {total}
      </p>

      <Form />
    </div>
  );
};

export default App;
