"use client";
export default function Home() {
  const showNotfication = () => {
    if (!("Notification" in window)) {
      alert("المتصفح لا يدعم الاشعارات");
    }
    if (Notification.permission === "granted") {
      new Notification("Hello World", {
        body: "Test Work",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Done", {
            body: "Notifications Works",
          });
        }
      });
    }
  };

  return (
    <div className="main">
      <p>Test Notfications</p>
      <button onClick={showNotfication}>Send notfication</button>
    </div>
  );
}
