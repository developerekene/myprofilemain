import type React from "react";
import { useState, useRef, useEffect } from "react";
import FloatingTechLogosA from "../Components/FloatingTechLogosA";
import PageTransition from "../Components/PageTransition";
import styles from "../Styles/podcast.module.css";
import { Link } from "react-router-dom";

interface Episode {
  id: string;
  title: string;
  description: string;
  seriesId: string;
  type: "audio" | "video";
  duration: string;
  publishDate: string;
  audioUrl?: string;
  youtubeId?: string;
  thumbnail: string;
}

interface Series {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  episodeCount: number;
  category: string;
}

const Podcast: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string | null>(null);

  // Sample data with real images
  const series: Series[] = [
    {
      id: "tech-talks",
      title: "Tech Innovation Talks",
      description:
        "Deep conversations about cutting-edge technology and innovation in the digital world.",
      thumbnail:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      episodeCount: 12,
      category: "Technology",
    },
    {
      id: "dev-journey",
      title: "Developer Journey",
      description:
        "Stories from developers at different stages of their careers, sharing insights and experiences.",
      thumbnail:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      episodeCount: 8,
      category: "Career",
    },
    {
      id: "startup-stories",
      title: "Startup Stories",
      description:
        "Behind-the-scenes stories of building successful startups from the ground up.",
      thumbnail:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      episodeCount: 15,
      category: "Business",
    },
  ];

  const episodes: Episode[] = [
    {
      id: "1",
      title: "The Future of AI in Software Development",
      description:
        "Exploring how artificial intelligence is revolutionizing the way we write, test, and deploy code.",
      seriesId: "tech-talks",
      type: "video",
      duration: "42:15",
      publishDate: "2024-01-20",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1636885416608-da0caeae870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2glMjB0YWxrc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      title: "From Bootcamp to Senior Engineer",
      description:
        "A comprehensive guide to accelerating your development career and climbing the engineering ladder.",
      seriesId: "dev-journey",
      type: "audio",
      duration: "38:45",
      publishDate: "2024-01-18",
      audioUrl: "/sample.mp3",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=120&fit=crop",
    },
    {
      id: "3",
      title: "Building a Million Dollar SaaS",
      description:
        "The complete story of how we built and scaled our SaaS product to seven figures in revenue.",
      seriesId: "startup-stories",
      type: "video",
      duration: "55:30",
      publishDate: "2024-01-15",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=120&fit=crop",
    },
    {
      id: "4",
      title: "Mastering React Hooks",
      description:
        "Deep dive into React Hooks and how to use them effectively in your applications.",
      seriesId: "tech-talks",
      type: "audio",
      duration: "45:20",
      publishDate: "2024-01-12",
      audioUrl: "/sample.mp3",
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=120&fit=crop",
    },
    {
      id: "5",
      title: "Remote Work Best Practices",
      description:
        "Tips and strategies for being productive while working remotely as a developer.",
      seriesId: "dev-journey",
      type: "video",
      duration: "32:10",
      publishDate: "2024-01-10",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=200&h=120&fit=crop",
    },
    {
      id: "6",
      title: "Scaling Your First Product",
      description:
        "Lessons learned from scaling a product from 0 to 100k users.",
      seriesId: "startup-stories",
      type: "audio",
      duration: "48:35",
      publishDate: "2024-01-08",
      audioUrl: "/sample.mp3",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=120&fit=crop",
    },
  ];

  if (selectedSeries) {
    return (
      <SeriesDetail
        seriesId={selectedSeries}
        series={series}
        episodes={episodes}
        onBack={() => setSelectedSeries(null)}
      />
    );
  }

  return (
    <>
      <FloatingTechLogosA />
      <PageTransition>
        <div className={styles.podcastContainer}>
          <div className={styles.header}>
            <h1 className={styles.title}>My Podcast Series</h1>
            <p className={styles.subtitle}>
              Explore different podcast series covering technology, career
              development, and startup stories.
            </p>
          </div>

          <div className={styles.seriesGrid}>
            {series.map((s) => (
              <div
                key={s.id}
                className={styles.seriesCard}
                onClick={() => setSelectedSeries(s.id)}
              >
                <img
                  src={s.thumbnail || "/placeholder.svg"}
                  alt={s.title}
                  className={styles.seriesCardImage}
                />
                <h3 className={styles.seriesCardTitle}>{s.title}</h3>
                <p className={styles.seriesCardDescription}>{s.description}</p>
                <div className={styles.seriesCardMeta}>
                  <span className={styles.episodeCount}>
                    {s.episodeCount} episodes
                  </span>{" "}
                  • {s.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageTransition>
    </>
  );
};

const SeriesDetail: React.FC<{
  seriesId: string;
  series: Series[];
  episodes: Episode[];
  onBack: () => void;
}> = ({ seriesId, series, episodes, onBack }) => {
  const currentSeries = series.find((s) => s.id === seriesId);
  const seriesEpisodes = episodes.filter((e) => e.seriesId === seriesId);

  if (!currentSeries) return null;

  return (
    <PageTransition>
      <FloatingTechLogosA />
      <div className={styles.seriesDetailContainer}>
        <button onClick={onBack} className={styles.backButton}>
          ← Back to Series
        </button>

        <div className={styles.seriesHeader}>
          <img
            src={currentSeries.thumbnail || "/placeholder.svg"}
            alt={currentSeries.title}
            className={styles.seriesImage}
          />
          <h1 className={styles.seriesTitle}>{currentSeries.title}</h1>
          <p className={styles.seriesDescription}>
            {currentSeries.description}
          </p>
        </div>

        <div className={styles.episodesList}>
          <h2 className={styles.episodesTitle}>
            Episodes ({seriesEpisodes.length})
          </h2>

          {seriesEpisodes.map((episode) => (
            <EpisodeItem key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

// Episode Item Component
const EpisodeItem: React.FC<{ episode: Episode }> = ({ episode }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleTogglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <div className={styles.episodeItem}>
      <div className={styles.episodeHeader} onClick={handleTogglePlayer}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3 className={styles.episodeTitle}>{episode.title}</h3>
            <p className={styles.episodeDescription}>{episode.description}</p>
            <div className={styles.episodeMeta}>
              <span className={styles.episodeType}>{episode.type}</span>
              <span>{episode.duration}</span>
              <span>{episode.publishDate}</span>
            </div>
          </div>
          <button
            className={styles.playButton}
            onClick={(e) => e.stopPropagation()}
          >
            {showPlayer ? "⏸️" : "▶️"}
          </button>
        </div>
      </div>

      {showPlayer &&
        (episode.type === "audio" ? (
          <AudioPlayer episode={episode} />
        ) : (
          <VideoPlayer episode={episode} />
        ))}
    </div>
  );
};

// Audio Player Component
const AudioPlayer: React.FC<{ episode: Episode }> = ({ episode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (Number.parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = Number.parseFloat(e.target.value) / 100;

    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioRef} src={episode.audioUrl} />

      <div className={styles.playerInfo}>
        <img
          src={episode.thumbnail || "/placeholder.svg"}
          alt={episode.title}
          className={styles.playerThumbnail}
        />
        <div className={styles.playerDetails}>
          <h4>{episode.title}</h4>
          <p>{episode.duration}</p>
        </div>
      </div>

      <div className={styles.playerControls}>
        <button className={styles.playerPlayButton} onClick={togglePlay}>
          {isPlaying ? "⏸️" : "▶️"}
        </button>

        <div className={styles.progressContainer}>
          <span className={styles.time}>{formatTime(currentTime)}</span>
          <input
            type="range"
            className={styles.progressBar}
            min="0"
            max="100"
            value={duration ? (currentTime / duration) * 100 : 0}
            onChange={handleSeek}
          />
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>

        <div className={styles.volumeContainer}>
          <span className={styles.volumeIcon}>🔊</span>
          <input
            type="range"
            className={styles.volumeBar}
            min="0"
            max="100"
            value={volume * 100}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

// Video Player Component
const VideoPlayer: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <div className={styles.videoPlayer}>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${episode.youtubeId}`}
          title={episode.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={styles.videoInfo}>
        <span>Watch on YouTube</span>
        <a
          href={`https://www.youtube.com/watch?v=${episode.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeLink}
        >
          Open in YouTube →
        </a>
      </div>
    </div>
  );
};

export default Podcast;
