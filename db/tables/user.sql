CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_name character varying(256) UNIQUE NULL,
    normalized_user_name character varying(256) NULL,
    email character varying(256) NULL,
    normalized_email character varying(256) NULL,
    email_confirmed boolean NOT NULL,
    password_hash text NULL,
    security_stamp character varying(64) NOT NULL,
    concurrency_stamp bigint NOT NULL,
    pseudo character varying(64) NOT NULL,
    created_at timestamptz NOT NULL,
    last_login_time timestamptz NOT NULL
);