import { useToast } from "@/components/ui/use-toast";
import { callLoginUserApi } from "@/services";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CommonButton from "@/components/common-button";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await callLoginUserApi({ email, password });
    if (data?.success) {
      toast({
        title: "User Loggedin successfully",
        description: "Welcome",
      });
      navigate("/tasks/list");
    } else {
      toast({
        title: "Error",
        description: "Some Error Occured",
      });
    }
  };

  return (
    <div className="flex items-center justify-center mt-5 p-4 ">
      <Card className="w-full max-w-md shadow-lg rounded-2xl lex items-center justify-center">
        <CardHeader>
          <CardTitle className="text-center text-xl">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignIn;
