-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Jeu 03 Septembre 2020 à 20:00
-- Version du serveur :  5.7.31-0ubuntu0.18.04.1
-- Version de PHP :  7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `becomepote`
--

-- --------------------------------------------------------

--
-- Structure de la table `chat_message`
--

CREATE TABLE `chat_message` (
  `id` int(10) UNSIGNED NOT NULL,
  `message_content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `choices`
--

CREATE TABLE `choices` (
  `id` int(10) UNSIGNED NOT NULL,
  `choice_content` text NOT NULL,
  `question_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `choices`
--

INSERT INTO `choices` (`id`, `choice_content`, `question_id`, `created_at`, `updated_at`) VALUES
(1, 'Une pizza', 1, '2020-04-14 08:05:41', NULL),
(2, 'Une quiche', 1, '2020-04-14 08:05:41', NULL),
(3, 'Un hot-dog', 1, '2020-04-14 08:05:41', NULL),
(4, 'Emerillonné', 2, '2020-04-14 08:07:54', NULL),
(5, 'Mirliflore', 2, '2020-04-14 08:07:54', NULL),
(6, 'Emberlucoter', 2, '2020-04-14 08:07:54', NULL),
(7, 'Force rouge', 3, '2020-04-14 08:09:51', NULL),
(8, 'Force jaune', 3, '2020-04-14 08:09:51', NULL),
(9, 'Force noire', 3, '2020-04-14 08:09:51', NULL),
(10, 'Force vert', 3, '2020-04-14 08:09:51', NULL),
(11, 'Force rose', 3, '2020-04-14 08:09:51', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `has_message`
--

CREATE TABLE `has_message` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id_1` int(10) UNSIGNED NOT NULL,
  `user_id_2` int(10) UNSIGNED NOT NULL,
  `chat_message_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id` int(10) UNSIGNED NOT NULL,
  `question_content` text NOT NULL,
  `question_type` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `questions`
--

INSERT INTO `questions` (`id`, `question_content`, `question_type`, `created_at`, `updated_at`) VALUES
(1, 'Quitte à choisir, vous préféreriez être ?', 1, '2020-04-14 08:04:27', NULL),
(2, 'Vite choissisez un mot, le temps presse !', 1, '2020-04-14 08:04:27', NULL),
(3, 'Oh non ! Un méchant à l\'horizon, transformation en ?', 1, '2020-04-14 08:04:27', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `selected`
--

CREATE TABLE `selected` (
  `id` int(10) UNSIGNED NOT NULL,
  `choice_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `selected`
--

INSERT INTO `selected` (`id`, `choice_id`, `user_id`, `created_at`) VALUES
(618, 0, 280, '2020-08-26 16:40:02'),
(619, 0, 280, '2020-08-26 16:40:02'),
(620, 11, 280, '2020-08-26 16:40:02'),
(624, 2, 281, '2020-09-03 09:06:57'),
(625, 6, 281, '2020-09-03 09:06:57'),
(626, 8, 281, '2020-09-03 09:06:57'),
(627, 1, 375, '2020-09-03 10:27:29'),
(628, 4, 375, '2020-09-03 10:27:29'),
(629, 9, 375, '2020-09-03 10:27:29'),
(630, 2, 381, '2020-09-03 15:02:50'),
(631, 6, 381, '2020-09-03 15:02:50'),
(632, 11, 381, '2020-09-03 15:02:50'),
(633, 1, 382, '2020-09-03 15:07:39'),
(634, 4, 382, '2020-09-03 15:07:39'),
(635, 7, 382, '2020-09-03 15:07:39'),
(636, 3, 383, '2020-09-03 15:11:40'),
(637, 4, 383, '2020-09-03 15:11:40'),
(638, 9, 383, '2020-09-03 15:11:40'),
(639, 1, 384, '2020-09-03 15:13:39'),
(640, 6, 384, '2020-09-03 15:13:39'),
(641, 10, 384, '2020-09-03 15:13:39'),
(642, 3, 386, '2020-09-03 19:23:53'),
(643, 4, 386, '2020-09-03 19:23:53'),
(644, 9, 386, '2020-09-03 19:23:53'),
(645, 2, 387, '2020-09-03 19:28:13'),
(646, 5, 387, '2020-09-03 19:28:13'),
(647, 8, 387, '2020-09-03 19:28:13'),
(648, 1, 388, '2020-09-03 19:46:07'),
(649, 4, 388, '2020-09-03 19:46:07'),
(650, 11, 388, '2020-09-03 19:46:07'),
(651, 3, 389, '2020-09-03 19:51:47'),
(652, 4, 389, '2020-09-03 19:51:47'),
(653, 10, 389, '2020-09-03 19:51:47'),
(654, 3, 390, '2020-09-03 19:57:51'),
(655, 5, 390, '2020-09-03 19:57:51'),
(656, 9, 390, '2020-09-03 19:57:51');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `pseudo` varchar(15) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `avatar` varchar(128) NOT NULL DEFAULT 'https://i.imgur.com/1ttSyNq.jpg',
  `age` varchar(10) DEFAULT NULL,
  `presentation` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `pseudo`, `firstname`, `lastname`, `avatar`, `age`, `presentation`, `created_at`, `updated_at`) VALUES
(381, 'meutrix@gmail.com', '$2b$10$XtmjSNrEH5br0j2CFm9zR.xCMQ.jKPQx9bKDYtM.a6t/pmCvinj8u', 'Christian', 'Christian', 'Bourgeois', 'https://res.cloudinary.com/becomepote/image/upload/v1599145357/becomepote/BeComePote_381.jpg', '40', 'Aime se cacher dans des bambous pour se retrouver en osmose avec la terre, son motto \"Me dit pas que j\'ai encore fait une faute de frappe dans le ClassName ?!\" fait fureur après 2h de debug. En train de se réconcilier avec PHP 7.', '2020-09-03 15:01:27', '2020-09-03 15:02:37'),
(382, 'parville.baptiste@gmail.com', '$2b$10$Md4r.HnAHLMbDASV/FEijuaOiXjpnuHcrpuSiZKVGDWXr0ASEzSay', 'BaptJack', 'Baptiste', 'Parville', 'https://res.cloudinary.com/becomepote/image/upload/v1599145650/becomepote/BeComePote_382.jpg', '24', 'Skateur du dimanche, codeur la semaine. Son motto \"Y a pas de raison que ça ne marche pas là !\". Amoureux du front, en plein découverte romantique avec le back, il lorgne sur Symfony.', '2020-09-03 15:04:12', '2020-09-03 15:07:30'),
(383, 'jesais@maildrop.cc', '$2b$10$NNnHl1OTZULpf16cvlZblOggJIzuGi9w2LBSWNqdkXDOKxmNLCmBW', 'Alex', 'Alexandre', 'Poutille', 'https://res.cloudinary.com/becomepote/image/upload/v1599145772/becomepote/BeComePote_383.jpg', '34', 'Salut tout le monde !\nJe viens d\'arriver sur Paris et je cherche à rencontrer du monde qui aime sortir, faire des escape game ou manger un bon repas.\nFaites moi signe si vous êtes partant.\nA bientôt,\nAlex', '2020-09-03 15:09:22', '2020-09-03 15:11:32'),
(384, 'afondlaforme@maildrop.cc', '$2b$10$YhB.Iu9CjJfUGy0L/tC33OQHE5bLrwYpdW.KU/fhmEXQcb81oKRdK', 'José', 'Joseph', 'Tapalu', 'https://res.cloudinary.com/becomepote/image/upload/v1599146009/becomepote/BeComePote_384.jpg', '27', 'Bonjour c\'est José,\nJe suis ici pour me faire des amis. J\'aime faire des balades avec mon chien, Kafi, les bonnes bières et jouer au foot.\nJe viens d\'arriver dans le coin, faites moi signe si moi et Kafi on vous intéresse.', '2020-09-03 15:13:15', '2020-09-03 15:15:30'),
(385, 'grapaou@maildrop.cc', '$2b$10$3Utd8d9UPy5BxpJvTnc9AuihO7J2mOry.N88v/NfmL8RNj0MCWZzy', 'Gauthier', 'Gauthier', 'Bizeau', 'https://res.cloudinary.com/becomepote/image/upload/v1599146213/becomepote/BeComePote_385.jpg', '32', 'J\'adore les choses improvisées, le sport et la nature.\nJe viens d\'arriver sur Lyon et je ne connais pas grand monde. Je commence mon nouveau boulot ici dans le codage (Node) et j\'aimerai rencontrer des nouvelles personnes hors du boulot histoire de parler d\'autre chose que de code.', '2020-09-03 15:16:44', '2020-09-03 15:33:23'),
(386, 'jaimelafrite@maildrop.cc', '$2b$10$3HjU2xnqg4h1xpPbURjeqePib.acaUv5YqRgOohUxQ0tvMDUA0J9K', 'Steven', 'Stéphane', 'Tabart', 'https://res.cloudinary.com/becomepote/image/upload/v1599161021/becomepote/BeComePote_386.jpg', '21', 'Salut tout le monde !\nPrêt pour de nouvelles aventures. Faites moi signe si vous êtes partants pour me rencontrer, j\'aime tout et tout le monde donc ça devrait bien se passer. A plus !', '2020-09-03 19:22:57', '2020-09-03 19:25:51'),
(387, 'fleursetvie@maildrop.cc', '$2b$10$9Pu8TayNBAzRsBlOXjAqn.CZp8cK7LSW8Q9f9JMUyorqgjINSLsvO', 'Flora', 'Florence', 'Pessine', 'https://res.cloudinary.com/becomepote/image/upload/v1599161250/becomepote/BeComePote_387.jpg', '34', 'Coucou, moi c\'est Flo !\nJ\'arrive tout juste sur Lyon et j\'aimerai me faire des ami(e)s pour sortir et découvrir cette belle ville.\nJe ne suis pas chiante et généralement partante pour tout. A bientôt !', '2020-09-03 19:27:18', '2020-09-03 19:29:01'),
(388, 'bananasplit@maildrop.cc', '$2b$10$qlyOr0.eVRq8OlAYw6RwXu9AFgapl8Tu2GpruUIn5z7IHidtj3.c6', 'Soph', 'Sophie', 'Biot', 'https://res.cloudinary.com/becomepote/image/upload/v1599162332/becomepote/BeComePote_388.jpg', '44', 'Bonjour, bonjour, mois c\'est Sophie, Soph pour les amis !\nSuite à un divorce, j\'ai un peu besoin de renouveler mon cercle d\'amis et j\'aimerai à l\'occasion élargir mes horizons pour découvrir de nouvelles choses.\nJ\'aime sortir, la musique, les bonnes tables et les expositions en tout genre !', '2020-09-03 19:45:22', '2020-09-03 19:47:21'),
(389, 'gratpoil@maildrop.cc', '$2b$10$FVxbCW9Wk11l7m0B03.UrurMziIPNV/1ih3Sl1GgM2TtLYn56nfIa', 'Kamile', 'Camille', 'Bran', 'https://res.cloudinary.com/becomepote/image/upload/v1599162695/becomepote/BeComePote_389.jpg', '18', 'Coucou tout le monde !\nVenez rencontrer Camille, la fille la plus fun du sud de Paris. J\'aime faire des nouvelles rencontres, sortir, faire du shopping et écouter de la musique. Si vous êtes un fan de musique ca m\'intéresse également. A bientôt j\'espère !', '2020-09-03 19:51:27', '2020-09-03 19:53:28'),
(390, 'pampam@maildrop.cc', '$2b$10$.Z2HhFVTouOoDfagHJLZ7OBkVKs33kzrZQAKf9lz2BBoCdhTWZU9S', 'PamPam', 'Carole', 'Madam', 'https://res.cloudinary.com/becomepote/image/upload/v1599162878/becomepote/BeComePote_390.jpg', '24', 'Bonjour tout le monde, me voici enfin sur ce super site !\nJe suis ravie à l\'idée de rencontrer des nouvelles personnes. N\'ayez pas peur de venir me parler !', '2020-09-03 19:54:30', '2020-09-03 19:59:39');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `chat_message`
--
ALTER TABLE `chat_message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `choices`
--
ALTER TABLE `choices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_id` (`question_id`) USING HASH;

--
-- Index pour la table `has_message`
--
ALTER TABLE `has_message`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `selected`
--
ALTER TABLE `selected`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`) USING BTREE,
  ADD KEY `choice_id1` (`choice_id`) USING BTREE;

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `chat_message`
--
ALTER TABLE `chat_message`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `choices`
--
ALTER TABLE `choices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT pour la table `has_message`
--
ALTER TABLE `has_message`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `selected`
--
ALTER TABLE `selected`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=657;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=391;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
