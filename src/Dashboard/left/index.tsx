import {
  Card,
  Text,
  Grid,
  TextContainer,
  Icon,
  IndexTable,
} from "@shopify/polaris";
import * as React from "react";
import {
  QuestionMarkInverseMajor,
  ChatMajor,
  PlayCircleMajor,
  TeamMajor,
  ViewMinor,
} from "@shopify/polaris-icons";

export default function LeftContent() {
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

  const NewIcon = makeStylableComponent(Icon);
  const GridCell = makeStylableComponent(Grid.Cell);
  const supportContents = [
    {
      title: "Start live chat",
      icon: ChatMajor,
      content:
        "Talk to us directly via live chat to get help with your question",
    },
    {
      title: "Join PageFly Community",
      icon: TeamMajor,
      content:
        "Make friends with 4600+ PageFly merchants, developers, and designers to find what you're looking for.",
    },
    {
      title: "Visit Help Center",
      icon: QuestionMarkInverseMajor,
      content:
        "Find a solution for your problem with PageFly documents and tutorials",
    },
    {
      title: "View YouTube Channel",
      icon: PlayCircleMajor,
      content:
        "Check our comprehensive video tutorials to get the most of PageFly",
    },
  ];

  const recomentItems = [
    {
      title: "TrackingMore ‑ Order Tracking",
      icon: PlayCircleMajor,
      content:
        "Most user-friendly order tracking app with branded tracking page & notifications",
    },
    {
      title: "Areviews",
      icon: PlayCircleMajor,
      content:
        "Import Photo Reviews From Aliexpress,Amazon,Shein in few clicks",
    },
    {
      title: "All In One Automatic Discount",
      icon: PlayCircleMajor,
      content:
        "Create Bundle, Volume, Wholesale, Upsell, Stackable Discount Code & Upsell Offers",
    },
  ];

  const recommendedServices = [
    {
      title: "Check other PageFly Service Partners",
      icon: PlayCircleMajor,
      content: "Find out the best service partners hand picked by PageFly Team",
    },
  ];
  const recommendedShopify = [
    {
      title: "Halo",
      icon: PlayCircleMajor,
      author: "Halothemes",
      content:
        "Multipurpose Theme, built in Shopify OS 2.0 with many upgrades to ADA, UI/UX, Loading speed - satisfies any specific requirements.",
    },
    {
      title: "Ella",
      author: "Halothemes",
      icon: PlayCircleMajor,
      content:
        "An All-in-one Shopify Template with multiple layouts and styles allows you to create different structures and skyrocket your sales",
    },
    {
      title: "Colo",
      author: "alesHunter theme",
      icon: PlayCircleMajor,
      content:
        "Reduce bounce rates with +10 sections and 3 theme styles to increase your store performance and even improve your search engine",
    },
  ];

  const recentPages = [
    {
      title: "Untitled",
      type: "Regular",
      lastUpdated: "4 days",
      actions: ViewMinor,
    },
    {
      title: "hello1",
      type: "Regular",
      lastUpdated: "about 1 month",
      actions: ViewMinor,
    },
    {
      title: "test1",
      type: "Regular",
      lastUpdated: "about 1 month",
      actions: ViewMinor,
    },
    {
      title: "Untitled",
      type: "Product",
      lastUpdated: "about 1 month",
      actions: ViewMinor,
    },
  ];
  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const rowMarkup = recentPages.map(
    ({ title, type, lastUpdated, actions }, index) => (
      <IndexTable.Row id={index} key={index} position={index}>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>{type}</IndexTable.Cell>
        <IndexTable.Cell>{lastUpdated}</IndexTable.Cell>
        <IndexTable.Cell>
          <NewIcon
            style={{ width: 24, height: 24, cursor: "pointer", margin: 0 }}
            source={actions}
          />
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <>
      <Card>
        <Card.Section>
          <Text variant="headingMd" as="h6">
            Support
          </Text>
        </Card.Section>
        <Card.Section>
          <Grid>
            {supportContents.map((item) => (
              <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <TextContainer>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <NewIcon
                      style={{ margin: 0, width: 14, height: 14 }}
                      source={item.icon}
                    />
                    <Text variant="headingSm" as="h6">
                      {item.title}
                    </Text>
                  </div>
                  <p>{item.content}</p>
                </TextContainer>
              </Grid.Cell>
            ))}
          </Grid>
        </Card.Section>
      </Card>

      <Card>
        <Card.Section
          title="Recommended Shopify Apps"
          sectioned
          actions={[
            {
              content: "View all",
            },
          ]}
        ></Card.Section>
        <Card.Section>
          <Grid>
            {recomentItems.map((item) => (
              <GridCell
                style={{
                  border: "1px solid #f0f0f0",
                  borderRadius: 2,
                  padding: 12,
                }}
                columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
              >
                <TextContainer>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <NewIcon
                      style={{ margin: 0, width: 14, height: 14 }}
                      source={item.icon}
                    />
                    <Text variant="headingSm" as="h6">
                      {item.title}
                    </Text>
                  </div>
                  <p>{item.content}</p>
                </TextContainer>
              </GridCell>
            ))}
          </Grid>
        </Card.Section>
      </Card>
      <Card>
        <Card.Section
          title="Recommended Shopify Apps"
          sectioned
          actions={[
            {
              content: "View all",
            },
          ]}
        ></Card.Section>
        <Card.Section>
          <Grid>
            {recommendedServices.map((item) => (
              <GridCell
                style={{
                  border: "1px solid #f0f0f0",
                  borderRadius: 2,
                  padding: 12,
                }}
                columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
              >
                <TextContainer>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <NewIcon
                      style={{ margin: 0, width: 14, height: 14 }}
                      source={item.icon}
                    />
                    <Text variant="headingSm" as="h6">
                      {item.title}
                    </Text>
                  </div>
                  <p>{item.content}</p>
                </TextContainer>
              </GridCell>
            ))}
          </Grid>
        </Card.Section>
      </Card>
      <Card>
        <Card.Section
          title="Recommended Shopify Apps"
          sectioned
          actions={[
            {
              content: "View all",
            },
          ]}
        ></Card.Section>
        <Card.Section>
          <Grid>
            {recommendedShopify.map((item) => (
              <GridCell
                style={{
                  border: "1px solid #f0f0f0",
                  borderRadius: 2,
                  padding: 12,
                }}
                columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
              >
                <TextContainer>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                    }}
                  >
                    <NewIcon
                      color="base"
                      style={{ margin: 0, width: 14, height: 14 }}
                      source={item.icon}
                    />
                    <Text variant="headingSm" as="h6">
                      {item.title}
                    </Text>
                  </div>
                  <p>{item.content}</p>
                </TextContainer>
              </GridCell>
            ))}
          </Grid>
        </Card.Section>
      </Card>
      <Card>
        <Card.Section title="Recent Pages" sectioned></Card.Section>
        <Card.Section>
          <IndexTable
            resourceName={resourceName}
            itemCount={recentPages.length}
            headings={[
              { title: "Title" },
              { title: "Type" },
              { title: "Last Updated" },
              { title: "Actions", hidden: false },
            ]}
            selectable={false}
          >
            {rowMarkup}
          </IndexTable>
        </Card.Section>
      </Card>
    </>
  );
}
