self.addEventListener("push", (event) => {
  const data = event.data.json();
  const options = {
    body: data.notification.body,
    icon: data.notification.icon,
  };

  event.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});
