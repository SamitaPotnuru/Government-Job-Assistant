function addToolLogEntry(toolName, message) {
  const toolLog = document.getElementById("toolLog");
  const logEntry = document.createElement("div");
  logEntry.className = "tool-log";
  logEntry.innerHTML = `<span class="tool-name">[${toolName}]</span> ${message}`;
  toolLog.appendChild(logEntry);
  toolLog.scrollTop = toolLog.scrollHeight;
}

// Usage examples:
// addToolLogEntry('SEARCH', 'Searching schemes database');
// addToolLogEntry('RETRIEVE', 'Found 3 matching schemes');
// addToolLogEntry('SYSTEM', 'Agent ready');
