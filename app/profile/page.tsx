"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/hooks/userUser";
import {
  Briefcase,
  FileText,
  Github,
  Instagram,
  Linkedin,
  PencilLine,
  Sparkles,
  Twitter,
} from "lucide-react";

export default function ProfilePage() {
  const { user } = useUserStore();
  const displayName = user?.displayName || user?.email || "Guest";
  const email = user?.email || "No email on file";
  const initials = (user?.displayName || user?.email || "U").charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <section className="glass-card rounded-3xl p-6 md:p-8 bg-emerald-50/60 dark:bg-emerald-500/10 border border-border">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-primary/15 flex items-center justify-center overflow-hidden shadow-lg">
                {user?.profilePicture ? (
                  <img
                    src={user.profilePicture}
                    alt={displayName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold text-primary">{initials}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-display font-bold text-foreground">
                  <Sparkles className="h-6 w-6 text-primary" />
                  {displayName}
                </div>
                <p className="text-muted-foreground mt-1">{email}</p>
                <p className="text-sm text-muted-foreground mt-2">No bio provided</p>
              </div>
              <Button
                variant="outline"
                className="rounded-full gap-2 border-emerald-300/60 text-foreground hover:bg-emerald-100/70"
              >
                <PencilLine className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-6">
            <section className="glass-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Skills & Interests</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Add your top skills to get better interview recommendations.
              </p>
              <Button variant="outline" className="mt-4 rounded-full">
                Add Skills
              </Button>
            </section>

            <section className="glass-card rounded-2xl p-6 border border-border">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Resume</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload your resume to personalize feedback.
              </p>
              <Button variant="outline" className="mt-4 rounded-full">
                Upload Resume
              </Button>
            </section>
          </div>

          <section className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-display font-semibold">Social Links</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Twitter className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Twitter</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">GitHub</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Instagram</span>
                </div>
                <span className="text-xs text-muted-foreground">Not connected</span>
              </div>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-6 border border-border">
            <div className="flex items-center justify-between gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-display font-semibold">Interview History</h3>
              </div>
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-white">
                Practice New Interview
              </Button>
            </div>
            <div className="text-center py-10 text-muted-foreground">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-secondary flex items-center justify-center">
                <Briefcase className="h-6 w-6" />
              </div>
              <p className="font-medium">No interview practices yet</p>
              <p className="text-sm">
                Start your first practice interview to see your history here
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
