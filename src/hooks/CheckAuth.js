import { useState, useEffect } from "react";

const useCheckAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      try {
        console.log("🕵️ Checking auth…");
        const res = await fetch("http://localhost:8000/users/check", {
          method: "GET",
          credentials: "include",
        });
        console.log("👀 check status:", res.status);
        if (!res.ok) throw new Error("Not authenticated");
        setIsAuthenticated(res.ok);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    check();
  }, []);

  return { isAuthenticated, loading };
};

export default useCheckAuth;
