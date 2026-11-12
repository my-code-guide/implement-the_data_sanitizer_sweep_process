function sanitizeLog(entry, disallowedCharacters) {
  let result = ""

  for (const char of entry) {
    if (disallowedCharacters.includes(char)) {
      result += "#"
    } else {
      result += char
    }
  }

  return result
}

function cleanLogs(logs, disallowedCharacters) {
  let totalEntries = 0          //x
  let sanitizedEntries = 0      //y
  let informationalEntries = 0  //z

  for (const entry of logs) {
    totalEntries += 1

    if (entry.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred."
    }

    if(entry.startsWith('/')) {
      informationalEntries += 1
      continue
    }
    
    sanitizeLog(entry, disallowedCharacters)
    sanitizedEntries += 1
  }

  return `Total Entry Count: ${totalEntries}. Sanitized Entry Count: ${sanitizedEntries}. Informational Entry Count: ${informationalEntries}. Finished sanitizing logs.`
}