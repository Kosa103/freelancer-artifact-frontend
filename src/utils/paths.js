export default class Paths {
  static Auth = class {
    static login = 'login';
    static register = 'users';
  };

  static Players = class {
    static players = 'players';
    static playersOnline = 'players-online';
  };

  static Locations = class {
    static locations = playerId => `players/${playerId}/locations`;
  };

  static Systems = class {
    static systems = 'systems';
  };

  static Regions = class {
    static regions = 'regions';
  };
}
