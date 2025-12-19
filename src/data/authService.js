import db from "./db.json";

// Giả lập độ trễ mạng
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const USERS_KEY = "vite_users";

// Lấy danh sách người dùng.
// Trong môi trường thực tế, đây sẽ là một API call đến backend.
// Ở đây, chúng ta kết hợp người dùng từ db.json (chỉ đọc) và người dùng mới từ localStorage.
function getUsers() {
  const localUsersJson = localStorage.getItem(USERS_KEY);
  const localUsers = localUsersJson ? JSON.parse(localUsersJson) : [];

  // Dùng Map để tránh trùng lặp email, người dùng trong localStorage sẽ ghi đè
  const allUsersMap = new Map();
  db.users.forEach((user) => allUsersMap.set(user.email, user));
  localUsers.forEach((user) => allUsersMap.set(user.email, user));

  return Array.from(allUsersMap.values());
}

// Lưu người dùng mới vào localStorage. Trình duyệt không thể ghi trực tiếp vào file db.json.
function saveNewUserToLocalStorage(newUser) {
  const localUsersJson = localStorage.getItem(USERS_KEY);
  const localUsers = localUsersJson ? JSON.parse(localUsersJson) : [];
  localUsers.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(localUsers));
}

export const authService = {
  async login({ email, password }) {
    await delay(500);
    const users = getUsers();
    // Chú ý: Trong ứng dụng thực tế, mật khẩu phải được băm (hashed)
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      throw new Error("Invalid email or password");
    }
    // Không bao giờ trả về mật khẩu cho client
    const { password: _, ...userToReturn } = user;
    return userToReturn;
  },

  async register({ name, email, password }) {
    await delay(500);
    const users = getUsers();
    if (users.find((u) => u.email === email)) {
      throw new Error("User with this email already exists");
    }
    const newUser = { id: Date.now(), name, email, password }; // Mật khẩu nên được băm (hashed) trong thực tế
    // Lưu người dùng mới vào localStorage vì trình duyệt không thể ghi vào file hệ thống.
    saveNewUserToLocalStorage(newUser);
    const { password: _, ...userToReturn } = newUser;
    return userToReturn;
  },
};
