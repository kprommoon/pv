require 'webrick'

include WEBrick

def start_webrick(config = {})
  # always listen on port 8080
  config.update(:Port => 8081)
  server = HTTPServer.new(config)
  yield server if block_given?
  ['INT', 'TERM'].each {|signal|
    trap(signal) {server.shutdown}
  }
  server.start

end

start_webrick {|server|
  doc_root = Dir.pwd
  server.mount('/', HTTPServlet::FileHandler, doc_root, {})
}
