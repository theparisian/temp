CREATE TABLE quizes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID NOT NULL,
    concurrency_stamp bigint NOT NULL,
    created_at timestamptz NOT NULL,
    updated_at timestamptz NOT NULL,
    title character varying(256) NOT NULL,
    description character varying(1024) NULL,
    visibility smallint NOT NULL, -- private 0, public 1 
    question_count smallint NOT NULL,
    tags character varying(256) NULL, -- [tag1, tag2]
    default_parameters json NULL, -- {total_duration: 20, question_duration: 5} seconds
    status smallint NOT NULL, -- draft 0, published 1, inactif 2
    CONSTRAINT fk_user FOREIGN KEY(author_id) REFERENCES users(id)
)

CREATE TABLE quiz_questions (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    quiz_id UUID NOT NULL,
    content json NOT NULL, -- [ {type: "text", content: "Question 1" }, {type: "image", content: "link"}]
    answer_type smallint NOT NULL, -- single 0, multiple 1
    options json NOT NULL, -- [ {type: "text", content: "Option 1" }, {type: "image", content: "link"}]
    answer character varying(256) NOT NULL, -- [0, 1] option index
    order int NOT NULL,
    CONSTRAINT fk_quiz FOREIGN KEY(quiz_id) REFERENCES quizes(id)
)

CREATE TABLE quiz_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code character varying(256) UNIQUE NOT NULL,
    owner_id UUID NOT NULL,
    created_at timestamptz NOT NULL,
    quiz_id UUID NOT NULL,
    title character varying(256) NOT NULL,
    description character varying(1024) NULL,
    start_at timestamptz NOT NULL,
    end_at timestamptz NULL,
    parameters json NULL, -- {total_duration: 20, question_duration: 5} seconds
    -- visibility smallint NULL -- publique, une groupe d'utilisateur, cinémas, écoles etc.
    CONSTRAINT fk_quiz FOREIGN KEY(quiz_id) REFERENCES quizes(id),
    CONSTRAINT fk_user FOREIGN KEY(owner_id) REFERENCES users(id)
)

CREATE TABLE answer_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code character varying(256) NOT NULL,
    quiz_session_id UUID NOT NULL,
    created_at timestamptz NOT NULL,
    user_id UUID NULL,
    pseudo character varying(64) NULL, 
    correct_answer_count smallint NOT NULL,
    feedback character varying(512) NULL,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT fk_quiz_session FOREIGN KEY(quiz_session_id) REFERENCES quiz_sessions(id)
)
CREATE TABLE answers (
    id int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    answer_session_id UUID NOT NULL,
    quiz_question_id int NOT NULL,
    answer character varying(256) NOT NULL -- [0, 1] option index
    is_correct  boolean NOT NULL,
    CONSTRAINT fk_user_quiz_session FOREIGN KEY(answer_session_id) REFERENCES answer_sessions(id),
    CONSTRAINT fk_quiz_question FOREIGN KEY(quiz_question_id) REFERENCES quiz_questions(id)
)