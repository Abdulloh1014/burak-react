import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users">
      <Container>
        <Stack className="active-users__main">
          <Box className="active-users__title">Active Users</Box>
          <Stack className="active-users__cards">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => (
                  <Card key={index} variant="outlined" className="active-users__card">
                    <CardOverflow>
                      <AspectRatio ratio="1">
                        <img src={ele.memberImage} alt={ele.memberNick} />
                      </AspectRatio>
                    </CardOverflow>

                    <CardOverflow variant="soft" className="active-users__info">
                      <Stack className="active-users__text">
                        <Stack flexDirection="row">
                          <Typography className="active-users__name">
                            {ele.memberNick}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardOverflow>
                  </Card>
                ))
              ) : (
                <Box className="active-users__no-data">
                 No Active Users!
                </Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
