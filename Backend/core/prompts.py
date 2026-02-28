STORY_PROMPT = """
You are a creative story writer.

Generate a complete branching choose-your-own-adventure story.

IMPORTANT:
- Return ONLY valid JSON.
- Do NOT include explanation.
- Do NOT include markdown.
- Do NOT include schema.
- Output must start with {{ and end with }}.

JSON format must be:

{{
  "title": "string",
  "rootNode": {{
    "content": "string",
    "isEnding": false,
    "isWinning": false,
    "options": [
      {{
        "text": "string",
        "nextNode": {{
          "content": "string",
          "isEnding": false,
          "isWinning": false,
          "options": []
        }}
      }}
    ]
  }}
}}
"""