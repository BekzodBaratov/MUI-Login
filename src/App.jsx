import React from "react";
import {
  Button,
  FormControlLabel,
  Checkbox,
  CssBaseline,
  Box,
  TextField,
  Grid,
  Link,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  const Copyright = (props) => {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {"Copyright © "}
        <Link color="inherit" href="#">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ mt: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar sx={{ m: 1, bgColor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              autoFocus
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don`t have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ m: [8, 0, 4] }} />
      </Container>
    </ThemeProvider>
  );
};

export default App;

///////////////////////////////////////////////////////////////////////////
// import {
//   Typography,
//   AppBar,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardMedia,
//   CssBaseline,
//   Link,
//   Grid,
//   Toolbar,
//   Container,
// } from "@mui/material";
// import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { Box } from "@mui/system";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const theme = createTheme();

// const App = () => {
//   return (
//     <>
//       <CssBaseline />
//       <AppBar position="relative">
//         <Toolbar>
//           <PhotoCameraIcon />
//           <Typography sx={{ ml: 1 }} variant="h6">
//             Photo Album
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <main>
//         <Box>
//           <Container maxWidth="sm" sx={{ mt: 5 }}>
//             <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
//               Photo Album
//             </Typography>
//             <Typography variant="h5" align="center" color="textSecondary" paragraph>
//               Something short and leading about the collection below—its contents, the creator, etc. Make it short and
//               sweet, but not too short so folks don&apos;t simply skip over it entirely.
//             </Typography>
//             <div>
//               <Grid container spacing={2} sx={{ mt: 3 }} justifyContent="center">
//                 <Grid item>
//                   <Button variant="contained" color="primary">
//                     See my photos
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button variant="outlined" color="primary">
//                     Secondary action
//                   </Button>
//                 </Grid>
//               </Grid>
//             </div>
//           </Container>
//         </Box>
//         <Container sx={{ py: 8 }} maxWidth="md">
//           <Grid container spacing={4}>
//             {cards.map((card) => (
//               <Grid item key={card} xs={12} sm={6} md={4}>
//                 <Card sx={{ h: "100%", display: "flex", flexDirection: "column", boxShadow: 5 }}>
//                   <CardMedia
//                     component="img"
//                     image="https://source.unsplash.com/random"
//                     sx={{ aspectRatio: "9/6" }}
//                     alt="random"
//                   />
//                   <CardContent sx={{ flexGrow: 1 }}>
//                     <Typography component="h2" variant="h5" gutterBottom>
//                       Heading
//                     </Typography>
//                     <Typography color="text.secondary">
//                       This is a media card. You can use this section to describe the content.
//                     </Typography>
//                   </CardContent>
//                   <CardActions>
//                     <Button variant="outlined" size="small">
//                       View
//                     </Button>
//                     <Button variant="outlined" size="small">
//                       Edit
//                     </Button>
//                   </CardActions>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </main>
//       {/* Footer */}
//       <Box sx={{ bgcolor: "Background.paper", p: 6 }} component="footer">
//         <Typography variant="h6" align="center" gutterBottom>
//           Footer
//         </Typography>
//         <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
//           Something here to give the footer a purpose!
//         </Typography>
//         <Copyright></Copyright>
//       </Box>
//       {/* End Footer */}
//     </>
//   );
// };

// export default App;
