import { useEffect, useMemo, useState } from "react";
import { apiClient } from "../config/api";

const formatDate = (value) => {
  if (!value) return "Not available";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not available";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState({ loading: true, error: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setStatus({ loading: true, error: "" });
        const { data } = await apiClient.get("/profile");
        setUser(data?.user ?? null);
      } catch (error) {
        setStatus({
          loading: false,
          error:
            error?.response?.data?.message ||
            "We couldn't load your profile details right now.",
        });
        return;
      }

      setStatus({ loading: false, error: "" });
    };

    fetchProfile();
  }, []);

  const userInitials = useMemo(() => {
    if (!user?.username) return "BM";

    return user.username
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }, [user]);

  if (status.loading) {
    return (
      <section className="profile-page profile-page-state">
        <div className="profile-card status-card">
          <div className="profile-loading-bar" />
          <p className="profile-kicker">Profile</p>
          <h2>Loading your account details…</h2>
          <p>Please wait while we securely fetch your information.</p>
        </div>
      </section>
    );
  }

  if (status.error) {
    return (
      <section className="profile-page profile-page-state">
        <div className="profile-card status-card error-card">
          <p className="profile-kicker">Profile</p>
          <h2>Unable to load your profile</h2>
          <p>{status.error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="profile-page">
      <div className="profile-card">
        <div className="profile-hero">
          <div className="profile-avatar-large">{userInitials}</div>
          <div>
            <p className="profile-kicker">Account profile</p>
            <h1>{user?.username || "BookMyStock User"}</h1>
            <p className="profile-subtitle">
              Manage your identity details and review your registered account
              information.
            </p>
          </div>
        </div>

        <div className="profile-info-grid">
          <article className="profile-info-item">
            <span>Username</span>
            <strong>{user?.username || "Not available"}</strong>
          </article>
          <article className="profile-info-item">
            <span>Email address</span>
            <strong>{user?.email || "Not available"}</strong>
          </article>
          <article className="profile-info-item">
            <span>Joined date</span>
            <strong>{formatDate(user?.createdAt)}</strong>
          </article>
          <article className="profile-info-item">
            <span>User ID</span>
            <strong>{user?._id || "Not available"}</strong>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;
