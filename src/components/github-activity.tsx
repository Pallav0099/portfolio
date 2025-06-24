"use client";

import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function GitHubActivity() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const octokit = new Octokit();
    octokit
      .request("GET /users/{username}/events/public", {
        username: "PallavSingh",
      })
      .then((response) => {
        setEvents(response.data.slice(0, 5));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching GitHub events:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">GitHub Activity</h2>
      <div className="mt-8">
        {loading ? (
          <p className="text-center">Loading GitHub activity...</p>
        ) : events.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {event.type.replace("Event", "")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      in{" "}
                      <a
                        href={`https://github.com/${event.repo.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-semibold"
                      >
                        {event.repo.name}
                      </a>
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {new Date(event.created_at).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center">Could not fetch GitHub activity.</p>
        )}
      </div>
    </section>
  );
} 