import "./style.scss";
import * as React from "react";
import Content from "./content";
import { useState, useCallback, useRef } from "react";
import {
  ActionList,
  AppProvider,
  Frame,
  Navigation,
  TopBar,
  Icon,
  Tooltip,
} from "@shopify/polaris";
import {
  ArrowLeftMinor,
  QuestionMarkMajor,
  NotificationMajor,
  ChatMajor,
  FavoriteMajor,
  ReplaceMajor,
  FraudProtectPendingMajor,
  NoteMajor,
  TemplateMajor,
  ImageWithTextMajor,
  OrderStatusMinor,
  AppsMajor,
  GiftCardMajor,
  DeleteMajor,
  SettingsMajor,
} from "@shopify/polaris-icons";

function Dashboard() {
  const logoHeader = require("../logo/platinum.svg");
  const defaultState = useRef({
    emailFieldValue: "hoangdam.myshopify.com",
    nameFieldValue: "hoangdam.myshopify.com",
  });

  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);

  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  function makeStylableComponent(c: (arg0: any) => any) {
    return function StylableComponent(props: any) {
      const realComponent = c(props);
      const enhancedProps = {
        style: { ...props.style },
      };
      return realComponent
        ? React.cloneElement(realComponent, enhancedProps)
        : null;
    };
  }

  const TopBarUserMenu = makeStylableComponent(TopBar.UserMenu);
  const TopBarSearchField = makeStylableComponent(TopBar.SearchField);
  const NewTopBar = makeStylableComponent(TopBar);

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const userMenuMarkup = (
    <TopBarUserMenu
      actions={userMenuActions}
      name="hoangdam Admin"
      detail={storeName}
      initials=""
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBarSearchField
      style={{ margin: 0 }}
      onChange={() => {}}
      value={searchValue}
      placeholder="Search"
    />
  );

  const secondaryMenuMarkup = (
    <div className="list-icon-topbar" style={{ marginRight: 10 }}>
      <Tooltip dismissOnMouseOut content="Background Process">
        <Icon source={ReplaceMajor} />
      </Tooltip>

      <Tooltip dismissOnMouseOut content="Perks">
        <Icon source={FavoriteMajor} />
      </Tooltip>

      <Tooltip dismissOnMouseOut content="Open Live Chat">
        <Icon source={ChatMajor} />
      </Tooltip>

      <Tooltip dismissOnMouseOut content="Notification">
        <Icon source={NotificationMajor} />
      </Tooltip>

      <Tooltip dismissOnMouseOut content="Help & Support">
        <Icon source={QuestionMarkMajor} />
      </Tooltip>
    </div>
  );

  const topBarMarkup = (
    <NewTopBar
      style={{ display: "flex", backgroundColor: "#3229b3", height: "48px" }}
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    ></NewTopBar>
  );

  const logo = {
    width: 199,
    topBarSource: logoHeader?.default,
    contextualSaveBarSource: "",
    url: "#",
    accessibilityLabel: "",
  };

  const navigationMarkup = (
    <div style={{ backgroundColor: "red" }}>
      <Navigation location="/">
        <Navigation.Section
          items={[
            {
              label: "Back to Shopify",
              icon: ArrowLeftMinor,
            },
          ]}
        />
        <Navigation.Section
          separator
          items={[
            {
              label: "Dashboard",
              icon: TemplateMajor,
              onClick: () => {},
            },
            {
              label: "Analytics",
              icon: FraudProtectPendingMajor,
              onClick: () => {},
            },
          ]}
        />
        <Navigation.Section
          items={[
            {
              label: "Publishing",
              onClick: () => {},
              disabled: true,
            },
            {
              label: "Pages",
              icon: NoteMajor,
              onClick: () => {},
            },
            {
              label: "Sections",
              icon: ImageWithTextMajor,
              onClick: () => {},
            },
          ]}
        />
        <Navigation.Section
          separator
          items={[
            {
              label: "PageFly Add-ons",
              icon: OrderStatusMinor,
              onClick: () => {},
            },
            {
              label: "Integrations",
              icon: AppsMajor,
              onClick: () => {},
            },
          ]}
        />
        <Navigation.Section
          separator
          items={[
            {
              label: "Referral Programs",
              icon: GiftCardMajor,
              onClick: () => {},
            },
            {
              label: "Trash",
              icon: DeleteMajor,
              onClick: () => {},
            },
            {
              label: "Settings",
              icon: SettingsMajor,
              onClick: () => {},
            },
          ]}
        />
      </Navigation>
    </div>
  );

  return (
    <AppProvider
      i18n={{
        Polaris: {
          Avatar: {
            label: "Avatar",
            labelWithInitials: "Avatar with initials {initials}",
          },
          ContextualSaveBar: {
            save: "Save",
            discard: "Discard",
          },
          TextField: {
            characterCount: "{count} characters",
          },
          TopBar: {
            toggleMenuLabel: "Toggle menu",

            SearchField: {
              clearButtonLabel: "Clear",
              search: "Search",
            },
          },
          Modal: {
            iFrameTitle: "body markup",
          },
          Frame: {
            skipToContent: "Skip to content",
            navigationLabel: "Navigation",
            Navigation: {
              closeMobileNavigationLabel: "Close navigation",
            },
          },
        },
      }}
    >
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        navigation={navigationMarkup}
      >
        <Content />
      </Frame>
    </AppProvider>
  );
}

export default Dashboard;
