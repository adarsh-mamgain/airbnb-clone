import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Holiday Homes & Apartment Rentals - Airbnb - Airbnb</title>
        <meta
          name="description"
          content="Holiday Homes & Apartment Rentals - Airbnb - Airbnb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Grid container spacing={2} minHeight={100}>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <Image src="/logo.svg" alt="Airbnb Logo" width={102} height={32} />
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center">
            <Box>
              <span>Anywhere</span>
              <span>Any Week</span>
              <span>Add guest</span>
              <span>Search ICON</span>
            </Box>
          </Grid>
          <Grid xs display="flex" justifyContent="center" alignItems="center">
            <span>Become a host</span>
            <Image src="/world.svg" alt="world" width={16} height={16} />
            <Button>
              <Image src="/menu.svg" alt="menu" width={16} height={16} />
              <Image src="/user.svg" alt="user" width={32} height={32} />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Image src="/beach.jpeg" alt="beach" width={24} height={24} />
          <Image src="/pool.jpeg" alt="pool" width={24} height={24} />
          <Image src="/island.jpeg" alt="island" width={24} height={24} />
          <Button>
            <Image src="/filter.svg" alt="filter" width={16} height={16} />
            Filters
          </Button>
        </Grid>
      </header>

      <main>
        <Grid container spacing={2}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                width={302}
                height={287}
                image="/mock.webp"
                alt="mock"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mumbai, India
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Juhu Beach
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  16-22 Oct
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  ₹4,299 night
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </main>

      <footer>
        <Box sx={{ p: 1, borderTop: "1px solid grey" }}>
          <span>&copy; 2022 Airbnb, Inc.</span>
          &middot;Privacy&middot;Terms&middot;Sitemap&middot;Company
          details&middot;Destinations Choose a language English (IN) Choose a
          currency ₹ INR Support & resources
        </Box>
      </footer>
    </div>
  );
}
