export default class Paths {
  static Auth = class {
    static login = 'admin/login';
    static register = 'admin/users';
  };

  static Players = class {
    static players = 'admin/players';
    static playersOnline = 'admin/players-online';
  };

  static Locations = class {
    static locations = playerId => `admin/players/${playerId}/locations`;
  };

  static Systems = class {
    static systems = 'admin/systems';
  };

  static Regions = class {
    static regions = 'admin/regions';
  };
}
