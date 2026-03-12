---
name: program-repair
description: A systematic workflow for analyzing, diagnosing, and repairing program errors, exceptions, and crashes. Use this skill when you encounter specific error messages, stack traces, or definite bugs that need to be fixed.
---

# Program Repair

## Overview
This skill provides a structured approach to fixing programming errors. Unlike general debugging which focuses on finding the cause, this skill focuses on the *repair* cycle: from error analysis to verified fix.

## When to Use
- You have a specific error message or stack trace.
- A test case is failing.
- The application crashes or behaves incorrectly in a reproducible way.

## Repair Workflow

### Phase 1: Error Analysis
**Goal**: Understand exactly WHAT went wrong and WHERE.

1.  **Capture the Crash**:
    *   Get the full stack trace.
    *   Identify the exception type and message.
    *   Note the EXACT file path and line number.

2.  **Contextual Code Review**:
    *   Read the code at the failing line.
    *   Check variable definitions and types involved.
    *   Review immediate caller functions (up one or two levels in the stack).

### Phase 2: Diagnosis & Hypothesis
**Goal**: Explain WHY it went wrong.

1.  **Trace the State**:
    *   Where did the bad data come from?
    *   Are there unhandled nulls/undefined values?
    *   Is there a type mismatch?
    *   Is there a logic gap (e.g., missing `else` branch)?

2.  **Formulate Hypothesis**:
    *   "The variable `user` is null because the API call failed, but we didn't check for errors."
    *   "The index is out of bounds because `list` is empty."

### Phase 3: Fix Implementation
**Goal**: Apply a robust correction.

1.  **Select the Fix Strategy**:
    *   **Validation**: Add checks (`if (!x) return`).
    *   **Correction**: Fix the logic (e.g., off-by-one error).
    *   **Handling**: Try/Catch blocks (only if recovery is possible).
    *   **Refactor**: Modify the flow to avoid the error state entirely.

2.  **Apply the Fix**:
    *   Make the change minimal and focused.
    *   Add comments explaining *why* this fix is needed if it's not obvious.
    *   Ensure strict typing if applicable.

### Phase 4: Verification
**Goal**: Prove the fix works and breaks nothing else.

1.  **Verify the Fix**:
    *   Run the specific action that caused the crash.
    *   Confirm the error is gone.

2.  **Regression Check**:
    *   Run related tests.
    *   Check if the fix impacts other parts of the system (e.g., if you return early, does the UI handle it?).

## Common Fix Patterns

### Null/Undefined Pointers
*   **Fix**: fast-fail checks, optional chaining (`?.`), or default values (`||`, `??`).
*   *Example*: `const name = user?.profile?.name || 'Guest';`

### Type Errors
*   **Fix**: Explicit casting, type guards, or parsing.
*   *Example*: `const count = parseInt(inputString, 10);`

### Index Out of Bounds
*   **Fix**: Check length before access.
*   *Example*: `if (items.length > index) { ... }`

### Asynchronous Race Conditions
*   **Fix**: Use `await`, promises, or proper state management locks.
*   *Example*: Ensure data is loaded (`!loading`) before rendering.

## Red Flags (Do NOT Do)
*   **Swallowing Errors**: Empty `catch (e) {}` blocks.
*   **Blind Fixes**: Changing code without understanding why it failed.
*   **Over-Engineering**: Rewriting the whole module to fix a typo.
