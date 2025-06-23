interface UserResponse {
  id: number;
  username: string;
  email: string;
  level: number | null;
  avatar: string | null;
  banner: string | null;
}

export const UserSend = (user: UserResponse) => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    level: user.level,
    avatar: user.avatar,
    banner: user.banner,
  };
};
