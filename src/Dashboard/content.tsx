import {
  Card,
  Grid,
  List,
  Page,
  Text,
  Icon,
  TextContainer,
} from "@shopify/polaris";
import { Title } from "@shopify/polaris/build/ts/latest/src/components/Page/components/Header/components";
import * as React from "react";
import styled from "styled-components";

import LeftContent from "./left";
import RightContent from "./right";

export default function Content() {
  return (
    <Page fullWidth>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 12, xl: 12 }}>
          <StyleText as={"h1"} variant={"headingXs"}>
            Welcome to PageFly, hoangdam Admin!
          </StyleText>
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 8, xl: 8 }}>
          <LeftContent />
        </Grid.Cell>

        <Grid.Cell columnSpan={{ xs: 0, sm: 0, md: 0, lg: 4, xl: 4 }}>
          <RightContent />
        </Grid.Cell>
      </Grid>
    </Page>
  );
}

const StyleText: any = styled(Text)`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  font-size: 20px;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: var(--delay, 0);
  animation-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  animation-name: fadeInUp;
`;
