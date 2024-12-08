import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Alert,
  CircularProgress,
  Card,
  CardContent,
} from "@mui/material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    setError("");
    setSuccess(false);

    if (!username || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);

    // Simulação de autenticação (2 segundos)
    setTimeout(() => {
      setLoading(false);
      if (username === "admin" && password === "1234") {
        setSuccess(true);
      } else {
        setError("Usuário ou senha inválidos.");
      }
    }, 2000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #5b79f0, #80d0f2)", 
        padding: "2rem",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          borderRadius: 3,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            textAlign="center"
            color="primary"
            sx={{
              fontWeight: "bold",
              marginBottom: 3,
              textTransform: "uppercase",
            }}
          >
            Login
          </Typography>

          {error && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Login realizado com sucesso!
            </Alert>
          )}

          <TextField
            label="Usuário"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Senha"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            disabled={loading}
            sx={{
              marginBottom: 2,
              padding: "0.75rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Entrar"}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
