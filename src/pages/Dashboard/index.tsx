import {
  Container,
  Typography,
  Button,
  Box,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">KaioDev</Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 64px)", // Ajuste a altura para acomodar o cabeçalho
          textAlign: "center",
        }}
      >
        <Typography variant="h2" gutterBottom>
          Seja bem-vindo!
        </Typography>
        <Typography variant="h4" paragraph>
          Descubra nossas ofertas e cadastre-se para mais informações.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/users/new"
          startIcon={<PersonAddAltIcon />}
        >
          Cadastre-se
        </Button>
      </Container>
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          py: 2,
          textAlign: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography variant="body1" color="textSecondary">
          &copy; {new Date().getFullYear()} Kaio Vinícius - Todos os direitos
          reservados.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
