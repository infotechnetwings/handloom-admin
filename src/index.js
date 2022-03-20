import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Windmill } from "@windmill/react-ui";
import "./assets/css/custom.css";
import "./assets/css/tailwind.css";
import "./assets/css/tailwind.output.css";
import "@pathofdev/react-tag-input/build/index.css";
import App from "./App";
import myTheme from "./assets/theme/myTheme";
import { AdminProvider } from "./context/AdminContext";
import { SidebarProvider } from "./context/SidebarContext";
import ThemeSuspense from "./components/theme/ThemeSuspense";

import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <AdminProvider>
    <SidebarProvider>
      <Suspense fallback={<ThemeSuspense />}>
        <Windmill usePreferences theme={myTheme}>
          <Provider store={store}>
            <App />
          </Provider>
        </Windmill>
      </Suspense>
    </SidebarProvider>
  </AdminProvider>,

  document.getElementById("root")
);
