-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "thumbnail" TEXT,
    "liveLink" TEXT NOT NULL,
    "repoLink" TEXT NOT NULL,
    "features" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
