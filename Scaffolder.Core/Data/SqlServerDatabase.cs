﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Scaffolder.Core.Data
{
    /// <summary>
    /// 
    /// </summary>
    public class SqlServerDatabase : DatabaseBase<SqlConnection, SqlCommand>
    {
        public SqlServerDatabase(string connectionString)
            : base(connectionString)
        {
        }

        protected override SqlConnection CreateConnection(string connectionString)
        {
            return new SqlConnection(connectionString);
        }

        protected override SqlCommand CreateCommand(SqlConnection connection, String sql, Dictionary<String, Object> parameters = null)
        {
            var command = new SqlCommand(sql, connection);

            if (parameters != null)
            {
                foreach (var p in parameters)
                {
                    command.Parameters.Add(new SqlParameter
                    {
                        ParameterName = p.Key,
                        Value = p.Value
                    });
                }
            }

            return command;
        }
    }
}
