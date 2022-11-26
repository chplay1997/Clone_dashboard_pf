import {
  Card,
  Text,
  Grid,
  TextContainer,
  Icon,
  List,
  MediaCard,
  Button,
  ButtonGroup,
  Pagination,
} from "@shopify/polaris";
import * as React from "react";
import {
  ArrowLeftMinor,
  HomeMajor,
  OrdersMajor,
  ConversationMinor,
  QuestionMarkInverseMajor,
  QuestionMarkMajor,
  NotificationMajor,
  ChatMajor,
  FavoriteMajor,
  ReplaceMajor,
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  PlayCircleMajor,
  TeamMajor,
  CancelMajor,
  CircleCancelMajor,
} from "@shopify/polaris-icons";

export default function RightContent() {
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
  const NewButton = makeStylableComponent(Button);

  const tipContents = [
    {
      title:
        "Get more sales from your current contact with email/SMS campaigns",
      description:
        "Free 1,000 emails monthly available to you, setup abandon cart flow to recover lost sales.",
      contentButton: "Try for free",
    },
    {
      title: "Create and sell custom products with Printful",
      description:
        "Launch apparel collections fast and inventory-free with Printful, the leading print-on-demand and fulfillment company.",
      contentButton: "Get Started",
    },
  ];
  return (
    <>
      <Card>
        <Card.Section
          title={
            <Text variant="headingLg" as="h5" fontWeight="bold">
              What's New
            </Text>
          }
          sectioned
          actions={[
            {
              content: "View all",
            },
          ]}
        />
        <Card.Section>
          <TextContainer>
            <div>
              <Text variant="headingSm" as="h6" fontWeight="bold">
                Version: 3.25.10
              </Text>
              <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>
                November 17, 2022
              </span>
            </div>

            <div>
              <Text variant="headingSm" as="h6" fontWeight="bold">
                Fixed:
              </Text>
              <List type="bullet">
                <List.Item>Fixed known bugs.</List.Item>
              </List>
            </div>
          </TextContainer>
        </Card.Section>
      </Card>
      <Card>
        <Card.Section>
          <Text variant="headingLg" as="h5" fontWeight="bold">
            PageFly Community
          </Text>
        </Card.Section>
        <Card.Section>
          <TextContainer>
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="https://cdn.pagefly.io/static/images/temp/PF-Community-banner.png"
            />
            <p>
              Be a member of our Facebook group and gain diverse tips to build
              your online store.
            </p>
            <p>
              Get Bearie Coins for joining the group and giving your first post.
            </p>
            <NewButton fullWidth primary style={{ backgroundColor: "#5555ff" }}>
              Join our community & get coins
            </NewButton>
          </TextContainer>
        </Card.Section>
      </Card>
      <Card>
        <Card.Section sectioned>
          <Text variant="headingLg" as="h5" fontWeight="bold">
            Resources
          </Text>
        </Card.Section>
        <Card.Section>
          <TextContainer>
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              src="https://cdn.shopify.com/s/files/1/0090/9236/6436/articles/Blog_post_thumbnail_ca5e4e17-aca6-4696-979a-84388724f25e.jpg?v=1667965132"
            />
            <Text variant="headingMd" as="h6">
              Everything You Need to Know About Shopify Product Bundles
            </Text>

            <p>
              Shopify App Bundles can make this process easy by letting you pick
              and choose bundle product apps according to your requirements.
            </p>
            <ButtonGroup>
              <Button>Read Now</Button>
              <Button plain>View all Blog Posts</Button>
            </ButtonGroup>
          </TextContainer>
        </Card.Section>
        <Card.Section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 8,
            }}
          >
            <span style={{ color: "rgba(0, 0, 0, 0.45)" }}>1/3</span>
            <Pagination
              previousKeys={[74]}
              previousTooltip="j"
              onPrevious={() => {
                console.log("Previous");
              }}
              hasNext
              nextKeys={[75]}
              nextTooltip="k"
              onNext={() => {
                console.log("Next");
              }}
            />
          </div>
        </Card.Section>
      </Card>

      <Card>
        <Card.Section>
          <Text variant="headingLg" as="h5" fontWeight="bold">
            Tips
          </Text>
        </Card.Section>
        <Card.Section>
          <TextContainer>
            {tipContents.map((item, index) => (
              <TextContainer>
                <Text variant="headingMd" as="h6">
                  {item.title}
                </Text>
                <p>{item.description}</p>
                <Button plain>{item.contentButton}</Button>
              </TextContainer>
            ))}
          </TextContainer>
        </Card.Section>
      </Card>
      <Card>
        <div style={{ position: "relative" }}>
          <img
            alt=""
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src="https://cdn.pagefly.io/images/custom/Inappbannersidebar11667966669958.png"
          />
          <NewIcon
            style={{
              margin: 0,
              width: 24,
              height: 24,
              position: "absolute",
              top: 4,
              right: 4,
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            source={CircleCancelMajor}
          />
        </div>
      </Card>
    </>
  );
}
